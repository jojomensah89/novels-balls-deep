import { parseHTML } from "linkedom";
import type { DomProvider, PageLike } from "./types";

/**
 * Adapter for the BrowserService (Playwright).
 * Dynamic import to avoid strict circular dependency if used in simple contexts.
 */
export class BrowserDomProvider implements DomProvider {
    async getPage(): Promise<PageLike> {
        const { BrowserService } = await import("./browser-service");
        // @ts-ignore - BrowserService returns a real Page, which satisfies PageLike
        return BrowserService.getInstance().getPage();
    }

    async close(): Promise<void> {
        const { BrowserService } = await import("./browser-service");
        await BrowserService.getInstance().close();
    }
}

/**
 * Lightweight DOM provider using Linkedom.
 * Does NOT run JavaScript in the page.
 */
export class StaticDomProvider implements DomProvider {
    async getPage(): Promise<PageLike> {
        return new LinkedomPage();
    }

    async close(): Promise<void> {
        // No-op
    }
}

class LinkedomPage implements PageLike {
    private _content: string = "";
    private _document: any = null;
    private _window: any = null;

    async goto(url: string, options?: any): Promise<any> {
        console.log(`[StaticDomProvider] Fetching ${url}...`);
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }

        this._content = await response.text();
        const { document, window } = parseHTML(this._content);
        this._document = document;
        this._window = window;

        return response;
    }

    async waitForSelector(selector: string, options?: any): Promise<any> {
        if (!this._document) throw new Error("Page not loaded");
        // Static check only
        return this._document.querySelector(selector);
    }

    async content(): Promise<string> {
        return this._content;
    }

    async close(): Promise<void> {
        this._document = null;
        this._window = null;
        this._content = "";
    }

    async evaluate<R>(pageFunction: (args: any) => R, arg?: any): Promise<R> {
        // @ts-ignore
        global.document = this._document;
        // @ts-ignore
        global.window = this._window;

        try {
            return pageFunction(arg);
        } finally {
            // @ts-ignore
            delete global.document;
            // @ts-ignore
            delete global.window;
        }
    }
}
