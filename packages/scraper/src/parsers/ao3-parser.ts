import { BaseParser } from "./base-parser";
import type { PageLike, ScrapedNovel, ScrapedChapter } from "../types";

export class AO3Parser extends BaseParser {
    async parseNovelMetadata(page: PageLike, url: string): Promise<ScrapedNovel> {
        // AO3 specific selectors
        const title = await page.evaluate(() => document.querySelector("h2.title")?.textContent?.trim() || "");
        const author = await page.evaluate(() => document.querySelector("h3.byline")?.textContent?.trim() || "Unknown");
        const description = await page.evaluate(() => document.querySelector("blockquote.userstuff")?.textContent?.trim() || "");

        // Tags/Genres
        const genres = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("dd.tags li a.tag")).map(el => el.textContent?.trim() || "");
        });

        const statusText = await page.evaluate(() => document.querySelector("dd.stats dl.stats dt.status + dd")?.textContent || "");
        let status: "ongoing" | "completed" | "hiatus" = "ongoing";
        if (statusText.includes("Completed")) status = "completed";

        return {
            title,
            author,
            description,
            genres: genres.filter(g => g),
            status,
            sourceUrl: url,
            originalLanguage: "en", // Default assumption for AO3
        };
    }

    async parseChapterList(page: PageLike): Promise<string[]> {
        // On AO3, chapter list logic can be complex (Navigate to /navigate or check "Entire Work")
        // This is a simplified example assuming we are on the Index page
        const chapterUrls = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll("ol.chapter.index li a"));
            return links.map(a => (a as HTMLAnchorElement).href);
        });

        // If empty, maybe it's a single chapter work?
        if (chapterUrls.length === 0) {
            // Check if "Entire Work" is available or if we are on a chapter
            return [];
        }

        return chapterUrls;
    }

    async parseChapter(page: PageLike, chapterUrl: string): Promise<ScrapedChapter> {
        const title = await page.evaluate(() => document.querySelector("h3.title")?.textContent?.trim() || "");

        // Content
        const content = await page.evaluate(() => {
            const userStuff = document.querySelector("div.userstuff");
            if (!userStuff) return "";
            // Remove notes if needed
            return userStuff.innerHTML;
        });

        // Extract chapter number from URL or title
        // AO3 URLs: /works/123/chapters/456
        // This doesn't give number.
        const chapterNumberMatch = title.match(/Chapter (\d+)/);
        const chapterNumber = chapterNumberMatch ? parseInt(chapterNumberMatch[1]) : 1;

        return {
            chapterNumber,
            title,
            content,
            sourceUrl: chapterUrl,
        };
    }
}
