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
    browserProvider?: BrowserProvider;
}

export interface BrowserProvider {
    getPage: () => Promise<any>; // Using any to be compatible with Playwright/Puppeteer Page types
    close: () => Promise<void>;
}

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
