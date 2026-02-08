import type { PageLike } from "../types";
import type { ScrapedNovel, ScrapedChapter } from "../types";

export interface Parser {
    parseNovelMetadata(page: PageLike, url: string): Promise<ScrapedNovel>;
    parseChapterList(page: PageLike): Promise<string[]>;
    parseChapter(page: PageLike, chapterUrl: string): Promise<ScrapedChapter>;
}

export abstract class BaseParser implements Parser {
    abstract parseNovelMetadata(page: PageLike, url: string): Promise<ScrapedNovel>;
    abstract parseChapterList(page: PageLike): Promise<string[]>;
    abstract parseChapter(page: PageLike, chapterUrl: string): Promise<ScrapedChapter>;

    /**
     * Helper to resolve relative URLs
     */
    protected resolveUrl(base: string, relative: string): string {
        try {
            return new URL(relative, base).href;
        } catch {
            return relative;
        }
    }

    /**
     * Helper to clean text content
     */
    protected cleanText(text: string): string {
        return text.replace(/\s+/g, " ").trim();
    }
}
