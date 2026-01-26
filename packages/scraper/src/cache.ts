import { createHash } from "crypto";

/**
 * Cache entry with content and metadata
 */
interface CacheEntry {
    content: string;
    timestamp: number;
}

/**
 * Simple in-memory cache for chapter content
 * Prevents redundant network requests for already-fetched chapters
 */
export class ChapterCache {
    private cache: Map<string, CacheEntry> = new Map();
    private ttl: number; // Time to live in milliseconds

    constructor(ttlMinutes: number = 60) {
        this.ttl = ttlMinutes * 60 * 1000;
    }

    /**
     * Generate cache key from URL
     */
    private getCacheKey(url: string): string {
        return createHash("md5").update(url).digest("hex");
    }

    /**
     * Check if entry is expired
     */
    private isExpired(entry: CacheEntry): boolean {
        return Date.now() - entry.timestamp > this.ttl;
    }

    /**
     * Get cached content if available and not expired
     */
    get(url: string): string | null {
        const key = this.getCacheKey(url);
        const entry = this.cache.get(key);

        if (!entry) return null;

        if (this.isExpired(entry)) {
            this.cache.delete(key);
            return null;
        }

        return entry.content;
    }

    /**
     * Store content in cache
     */
    set(url: string, content: string): void {
        const key = this.getCacheKey(url);
        this.cache.set(key, {
            content,
            timestamp: Date.now(),
        });
    }

    /**
     * Check if URL is cached and not expired
     */
    has(url: string): boolean {
        return this.get(url) !== null;
    }

    /**
     * Clear all cached entries
     */
    clear(): void {
        this.cache.clear();
    }

    /**
     * Clear expired entries
     */
    clearExpired(): void {
        for (const [key, entry] of this.cache.entries()) {
            if (this.isExpired(entry)) {
                this.cache.delete(key);
            }
        }
    }

    /**
     * Get cache statistics
     */
    getStats(): { size: number; ttlMinutes: number } {
        return {
            size: this.cache.size,
            ttlMinutes: this.ttl / (60 * 1000),
        };
    }
}

/**
 * Global cache instance
 */
export const globalCache = new ChapterCache();
