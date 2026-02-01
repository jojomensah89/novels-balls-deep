import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import * as playwright from "@cloudflare/playwright";
import { createSource, getAvailableSources } from "@novels-balls-deep/scraper";
import { z } from "zod";
import type { BrowserProvider } from "@novels-balls-deep/scraper/types";

type Env = {
    Bindings: {
        MYBROWSER: any; // Using any for Fetcher to avoid type complexity
    };
};

const app = new Hono<{ Bindings: Env["Bindings"] }>();

// Cloudflare Browser Provider Implementation
class CloudflareBrowserProvider implements BrowserProvider {
    constructor(private browserBinding: any) { }

    async getPage() {
        // @cloudflare/playwright's launch expects the binding
        const browser = await playwright.launch(this.browserBinding);
        const page = await browser.newPage();

        // Ensure browser is closed when page is done? 
        // BaseSource closes the page, but we might need to close the browser too.
        // For Cloudflare Sessions, we might want to keep it alive?
        // But for now let's just make it work.

        // HACK: Override page.close to also close browser for this simple implementation
        const originalClose = page.close.bind(page);
        page.close = async () => {
            await originalClose();
            await browser.close();
        };

        return page;
    }

    async close() {
        // No-op, managed by page close
    }
}

// Validation schemas
const actionSchema = z.enum(["search", "novel", "chapters", "chapter"]);
const sourceIdSchema = z.string().refine((val) => getAvailableSources().includes(val as any), {
    message: "Invalid source ID",
});

const scrapeSchema = z.object({
    action: actionSchema,
    sourceId: sourceIdSchema,
    query: z.string().optional(),
    url: z.string().optional(),
});

app.get("/", zValidator("query", scrapeSchema), async (c) => {
    const { action, sourceId, query, url } = c.req.valid("query");

    try {
        const browserBinding = c.env.MYBROWSER;
        if (!browserBinding) {
            return c.json({ error: "Browser binding not configured" }, 500);
        }

        const provider = new CloudflareBrowserProvider(browserBinding);
        const source = createSource(sourceId as any, { browserProvider: provider });

        switch (action) {
            case "search":
                if (!query) return c.json({ error: "Missing query" }, 400);
                const results = await source.searchNovels(query);
                return c.json(results);

            case "novel":
                if (!url) return c.json({ error: "Missing url" }, 400);
                const novel = await source.getNovel(url);
                return c.json(novel);

            case "chapters":
                if (!url) return c.json({ error: "Missing url" }, 400);
                const chapters = await source.getChapterList(url);
                return c.json(chapters);

            case "chapter":
                if (!url) return c.json({ error: "Missing url" }, 400);
                const chapter = await source.getChapter(url);
                return c.json(chapter);
        }
    } catch (error: any) {
        console.error("Scrape error:", error);
        return c.json({ error: error.message || "Internal Server Error" }, 500);
    }
});

export default app;
