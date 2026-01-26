import * as cheerio from "cheerio";
import { BaseSource } from "../base-source";
import { DECODERS } from "../decoder";
import type {
    ScrapedNovel,
    ScrapedChapter,
    ScraperOptions,
    ProgressCallback,
} from "../types";

/**
 * NovelBin scraper implementation
 * Source: https://novelbin.com
 */
export class NovelBinSource extends BaseSource {
    name = "NovelBin";
    baseUrl = "https://novelbin.com";
    private decoder = DECODERS.novelbin;

    constructor(options: ScraperOptions = {}) {
        super(options);
    }

    async searchNovels(query: string): Promise<ScrapedNovel[]> {
        const searchUrl = `${this.baseUrl}/search?keyword=${encodeURIComponent(query)}`;
        const html = await this.fetchHtml(searchUrl);
        const $ = cheerio.load(html);

        const novels: ScrapedNovel[] = [];
        const { search } = this.decoder.selectors;

        $(search.container).each((_, element) => {
            const $el = $(element);
            const title = $el.find(search.title).text().trim();
            const url = $el.find(search.url).attr("href");
            const coverImage = search.cover ? $el.find(search.cover).attr("src") : undefined;
            const author = search.author ? $el.find(search.author).text().trim() : undefined;

            if (title && url) {
                novels.push({
                    title,
                    author: author || undefined,
                    coverImage: coverImage ? this.resolveUrl(coverImage) : undefined,
                    sourceUrl: this.resolveUrl(url),
                });
            }
        });

        return novels;
    }

    async getNovel(url: string): Promise<ScrapedNovel> {
        const html = await this.fetchHtml(url);
        const $ = cheerio.load(html);
        const { novel } = this.decoder.selectors;

        const title = $(novel.title).first().text().trim();
        const coverImage = $(novel.cover).first().attr("src");
        const author = $(novel.author).first().text().trim();
        const description = $(novel.description).first().text().trim();

        // Extract genres
        const genres: string[] = [];
        $(novel.genres).each((_, el) => {
            const genre = $(el).text().trim();
            if (genre) genres.push(genre);
        });

        // Extract status
        let status: "ongoing" | "completed" | "hiatus" | undefined;
        const statusText = $(novel.status).text().toLowerCase();
        if (statusText.includes("ongoing")) status = "ongoing";
        else if (statusText.includes("completed")) status = "completed";
        else if (statusText.includes("hiatus")) status = "hiatus";

        return {
            title,
            author: author || undefined,
            coverImage: coverImage ? this.resolveUrl(coverImage) : undefined,
            description: description || undefined,
            genres: genres.length > 0 ? genres : undefined,
            status,
            sourceUrl: url,
        };
    }

    async getChapterList(novelUrl: string): Promise<string[]> {
        const html = await this.fetchHtml(novelUrl);
        const $ = cheerio.load(html);

        const chapterUrls: string[] = [];

        $(this.decoder.selectors.chapterList).each((_, element) => {
            const href = $(element).attr("href");
            if (href) {
                chapterUrls.push(this.resolveUrl(href));
            }
        });

        return chapterUrls;
    }

    async getChapter(chapterUrl: string): Promise<ScrapedChapter> {
        const html = await this.fetchHtml(chapterUrl, 1, true);
        const $ = cheerio.load(html);
        const { chapter } = this.decoder.selectors;

        const chapterNumber = this.extractChapterNumber(chapterUrl);
        const title = $(chapter.title).first().text().trim();

        // Get chapter content
        const $content = $(chapter.content).first();

        // Remove unwanted elements
        $content.find("script, style, .ads, .advertisement").remove();

        // Get text content and clean it
        const content = this.cleanContent($content.html() || "");

        return {
            chapterNumber,
            title: title || undefined,
            content,
            sourceUrl: chapterUrl,
        };
    }

    /**
     * Scrape all chapters for a novel with progress tracking
     */
    async scrapeNovelWithChapters(
        novelUrl: string,
        onProgress?: ProgressCallback
    ): Promise<{ novel: ScrapedNovel; chapters: ScrapedChapter[] }> {
        // Get novel details
        const novel = await this.getNovel(novelUrl);

        // Get chapter list
        const chapterUrls = await this.getChapterList(novelUrl);

        const chapters: ScrapedChapter[] = [];
        let completed = 0;
        let errors = 0;

        // Scrape chapters with concurrency limit
        const tasks = chapterUrls.map((url, index) =>
            this.limit(async () => {
                try {
                    const chapter = await this.getChapter(url);
                    chapters[index] = chapter;
                    completed++;

                    if (onProgress) {
                        onProgress({
                            total: chapterUrls.length,
                            completed,
                            current: `Chapter ${chapter.chapterNumber}`,
                            errors,
                        });
                    }
                } catch (error) {
                    errors++;
                    console.error(`Failed to scrape chapter ${url}:`, error);

                    if (onProgress) {
                        onProgress({
                            total: chapterUrls.length,
                            completed,
                            errors,
                        });
                    }
                }
            })
        );

        await Promise.all(tasks);

        // Filter out failed chapters and sort by chapter number
        const validChapters = chapters
            .filter(Boolean)
            .sort((a, b) => a.chapterNumber - b.chapterNumber);

        return { novel, chapters: validChapters };
    }
}
