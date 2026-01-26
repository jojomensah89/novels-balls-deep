import type { Source, ScrapedNovel, ScrapedChapter, ScraperOptions } from "./types";
import pLimit from "p-limit";
import { globalCache } from "./cache";

/**
 * Abstract base class for all novel sources
 * Provides common utilities for fetching, retry logic, and rate limiting
 */
export abstract class BaseSource implements Source {
    abstract name: string;
    abstract baseUrl: string;

    protected options: Required<ScraperOptions>;
    protected limit: ReturnType<typeof pLimit>;

    constructor(options: ScraperOptions = {}) {
        this.options = {
            maxConcurrency: options.maxConcurrency ?? 3,
            retryAttempts: options.retryAttempts ?? 3,
            retryDelay: options.retryDelay ?? 1000,
            timeout: options.timeout ?? 30000,
            userAgent: options.userAgent ?? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        };

        this.limit = pLimit(this.options.maxConcurrency);
    }

    /**
     * Fetch HTML with retry logic and timeout
     */
    protected async fetchHtml(url: string, attempt = 1, useCache = false): Promise<string> {
        if (useCache) {
            const cached = globalCache.get(url);
            if (cached) return cached;
        }

        try {
            const response = await fetch(url, {
                headers: {
                    "User-Agent": this.options.userAgent,
                },
                signal: AbortSignal.timeout(this.options.timeout),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const html = await response.text();

            if (useCache) {
                globalCache.set(url, html);
            }

            return html;
        } catch (error) {
            if (attempt < this.options.retryAttempts) {
                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, this.options.retryDelay));
                return this.fetchHtml(url, attempt + 1, useCache);
            }
            throw error;
        }
    }

    /**
     * Resolve relative URLs to absolute URLs
     */
    protected resolveUrl(url: string): string {
        if (url.startsWith("http")) return url;
        if (url.startsWith("//")) return `https:${url}`;
        if (url.startsWith("/")) return `${this.baseUrl}${url}`;
        return url;
    }

    /**
     * Clean HTML content by removing unwanted elements and formatting
     */
    protected cleanContent(html: string): string {
        return html
            .replace(/<br\s*\/?>/gi, "\n")
            .replace(/<\/p>/gi, "\n\n")
            .replace(/<[^>]+>/g, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .trim();
    }

    /**
     * Extract chapter number from URL or title
     */
    protected extractChapterNumber(url: string, title?: string): number {
        // Try URL first
        const urlMatch = url.match(/chapter[_-]?(\d+)/i);
        if (urlMatch && urlMatch[1]) return parseInt(urlMatch[1]);

        // Try title
        if (title) {
            const titleMatch = title.match(/chapter\s*(\d+)/i);
            if (titleMatch && titleMatch[1]) return parseInt(titleMatch[1]);
        }

        // Default to 1
        return 1;
    }

    // Abstract methods that must be implemented by subclasses
    abstract searchNovels(query: string): Promise<ScrapedNovel[]>;
    abstract getNovel(url: string): Promise<ScrapedNovel>;
    abstract getChapterList(novelUrl: string): Promise<string[]>;
    abstract getChapter(chapterUrl: string): Promise<ScrapedChapter>;
}
