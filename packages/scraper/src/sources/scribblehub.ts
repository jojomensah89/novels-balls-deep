import * as cheerio from "cheerio";
import { BaseSource } from "../base-source";
import { DECODERS } from "../decoder";
import type {
    ScrapedNovel,
    ScrapedChapter,
    ScraperOptions,
} from "../types";

/**
 * ScribbleHub scraper implementation
 * Source: https://www.scribblehub.com
 */
export class ScribbleHubSource extends BaseSource {
    name = "ScribbleHub";
    baseUrl = "https://www.scribblehub.com";
    private decoder = DECODERS.scribblehub;

    constructor(options: ScraperOptions = {}) {
        super(options);
    }

    async searchNovels(query: string): Promise<ScrapedNovel[]> {
        const searchUrl = `${this.baseUrl}/?s=${encodeURIComponent(query)}&post_type=fictionposts`;
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
}
