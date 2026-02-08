/**
 * Core types for the novel scraper
 */

export interface ScrapedNovel {
    title: string;
    alternativeTitles?: string[];
    author?: string;
    coverImage?: string;
    description?: string;
    genres?: string[];
    status?: "ongoing" | "completed" | "hiatus";
    originalLanguage?: string;
    sourceUrl: string;
}

export interface ScrapedChapter {
    chapterNumber: number;
    title?: string;
    content: string;
    sourceUrl: string;
    publishedAt?: Date;
}

export interface ScrapedTranslation {
    novel: ScrapedNovel;
    translatorName: string;
    translatorTeam?: string;
    language: string;
    isOfficial?: boolean;
    chapters: ScrapedChapter[];
}

/**
 * Source interface that all scrapers must implement
 */
export interface Source {
    name: string;
    baseUrl: string;

    /**
     * Search for novels by title
     */
    searchNovels(query: string): Promise<ScrapedNovel[]>;

    /**
     * Get novel details from a URL
     */
    getNovel(url: string): Promise<ScrapedNovel>;

    /**
     * Get list of chapter URLs for a novel
     */
    getChapterList(novelUrl: string): Promise<string[]>;

    /**
     * Get chapter content from a URL
     */
    getChapter(chapterUrl: string): Promise<ScrapedChapter>;
}

/**
 * Scraper configuration options
 */
export interface ScraperOptions {
    maxConcurrency?: number;
    retryAttempts?: number;
    retryDelay?: number;
    timeout?: number;
    userAgent?: string;
    browserProvider?: DomProvider;
}

export interface PageLike {
    goto(url: string, options?: any): Promise<any>;
    waitForSelector(selector: string, options?: any): Promise<any>;
    content(): Promise<string>;
    close(): Promise<void>;
    evaluate<R>(pageFunction: (args: any) => R, arg?: any): Promise<R>;
    [key: string]: any; // Allow other methods loosely
}

export interface DomProvider {
    getPage: () => Promise<PageLike>;
    close: () => Promise<void>;
}

// Backwards compatibility alias
export type BrowserProvider = DomProvider;

/**
 * Progress callback for scraping operations
 */
export interface ScraperProgress {
    total: number;
    completed: number;
    current?: string;
    errors?: number;
}

export type ProgressCallback = (progress: ScraperProgress) => void;
