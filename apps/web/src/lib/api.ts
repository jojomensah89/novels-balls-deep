import { env } from "@novels-balls-deep/env/web";
import type {
    Novel,
    NovelDetail,
    Chapter,
    Translation,
    Rating,
    ReadingListItem,
    ReadingProgress,
    User,
    UserPreferences,
    AdminStats,
    PaginatedResponse,
    ApiResponse,
} from "./api-types";

/**
 * Base API client for making requests to the NovelVerse API
 */
class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(
        endpoint: string,
        options?: RequestInit
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers,
            },
            credentials: "include",
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                error: "An error occurred",
            }));

            const errorMessage = typeof errorData.error === 'string'
                ? errorData.error
                : JSON.stringify(errorData.error || errorData) || `HTTP ${response.status}`;

            throw new Error(errorMessage);
        }

        return response.json();
    }

    // GET request
    async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
        const queryString = params
            ? `?${new URLSearchParams(params).toString()}`
            : "";
        return this.request<T>(`${endpoint}${queryString}`, {
            method: "GET",
        });
    }

    // POST request
    async post<T>(endpoint: string, data?: unknown): Promise<T> {
        return this.request<T>(endpoint, {
            method: "POST",
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    // PATCH request
    async patch<T>(endpoint: string, data?: unknown): Promise<T> {
        return this.request<T>(endpoint, {
            method: "PATCH",
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    // DELETE request
    async delete<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, {
            method: "DELETE",
        });
    }
}

// Create singleton instance
export const api = new ApiClient(env.NEXT_PUBLIC_SERVER_URL);

// ============================================
// Typed API Methods
// ============================================

/**
 * Novels API
 */
export const novels = {
    list: (params?: {
        page?: string;
        limit?: string;
        status?: "ongoing" | "completed" | "hiatus";
        sortBy?: "popularity" | "rating" | "updatedAt" | "title";
        order?: "asc" | "desc";
    }) =>
        api.get<PaginatedResponse<Novel>>(
            "/api/novels",
            params as Record<string, string>
        ),

    search: (params: { q: string; page?: string; limit?: string }) =>
        api.get<PaginatedResponse<Novel>>(
            "/api/novels/search",
            params as Record<string, string>
        ),

    getBySlug: (slug: string) =>
        api.get<ApiResponse<NovelDetail>>(`/api/novels/${slug}`),
};

/**
 * Chapters API
 */
export const chapters = {
    list: (params: { translationId: string; page?: string; limit?: string }) =>
        api.get<PaginatedResponse<Chapter>>(
            "/api/chapters",
            params as Record<string, string>
        ),

    getById: (id: string) => api.get<ApiResponse<Chapter>>(`/api/chapters/${id}`),
};

/**
 * Translations API
 */
export const translations = {
    list: (params?: {
        novelId?: string;
        language?: string;
        page?: string;
        limit?: string;
        sortBy?: "updatedAt" | "chapters" | "rating";
        order?: "asc" | "desc";
    }) =>
        api.get<PaginatedResponse<Translation>>(
            "/api/translations",
            params as Record<string, string>
        ),

    getById: (id: string) =>
        api.get<ApiResponse<Translation>>(`/api/translations/${id}`),

    create: (data: {
        novelId: string;
        translatorName: string;
        language: string;
        sourceUrl?: string;
    }) => api.post<ApiResponse<Translation>>("/api/translations", data),

    update: (
        id: string,
        data: {
            translatorName?: string;
            sourceUrl?: string;
            status?: "active" | "dropped" | "completed";
        }
    ) => api.patch<ApiResponse<Translation>>(`/api/translations/${id}`, data),
};

/**
 * Ratings API
 */
export const ratings = {
    create: (data: {
        translationId: string;
        rating: number;
        review?: string;
    }) => api.post<ApiResponse<Rating>>("/api/ratings", data),

    delete: (id: string) => api.delete<ApiResponse<{ success: boolean }>>(`/api/ratings/${id}`),
};

/**
 * Reading API
 */
export const reading = {
    getList: () => api.get<ApiResponse<ReadingListItem[]>>("/api/reading/list"),

    addToList: (data: {
        novelId: string;
        status: "reading" | "completed" | "plan_to_read" | "dropped";
    }) => api.post<ApiResponse<ReadingListItem>>("/api/reading/list", data),

    updateListStatus: (
        id: string,
        data: { status: "reading" | "completed" | "plan_to_read" | "dropped" }
    ) => api.patch<ApiResponse<ReadingListItem>>(`/api/reading/list/${id}`, data),

    removeFromList: (id: string) =>
        api.delete<ApiResponse<{ success: boolean }>>(`/api/reading/list/${id}`),

    updateProgress: (data: { chapterId: string; progress: number }) =>
        api.post<ApiResponse<ReadingProgress>>("/api/reading/progress", data),
};

/**
 * Users API
 */
export const users = {
    getMe: () => api.get<ApiResponse<User>>("/api/users/me"),

    updatePreferences: (data: Partial<UserPreferences>) =>
        api.patch<ApiResponse<UserPreferences>>("/api/users/preferences", data),
};

/**
 * Admin API
 */
export const admin = {
    createNovel: (data: {
        title: string;
        slug: string;
        description?: string;
        author: string;
        coverImage?: string;
        status: "ongoing" | "completed" | "hiatus";
    }) => api.post<ApiResponse<Novel>>("/api/admin/novels", data),

    updateNovel: (
        id: string,
        data: Partial<{
            title: string;
            slug: string;
            description: string;
            author: string;
            coverImage: string;
            status: "ongoing" | "completed" | "hiatus";
        }>
    ) => api.patch<ApiResponse<Novel>>(`/api/admin/novels/${id}`, data),

    deleteNovel: (id: string) =>
        api.delete<ApiResponse<{ success: boolean }>>(`/api/admin/novels/${id}`),

    getStats: () => api.get<ApiResponse<AdminStats>>("/api/admin/stats"),
};

/**
 * Scraper API
 */
export const scraper = {
    search: (sourceId: string, query: string) =>
        api.get<any[]>("/api/novels/scrape", { action: "search", sourceId, query }),

    getNovel: (sourceId: string, url: string) =>
        api.get<any>("/api/novels/scrape", { action: "novel", sourceId, url }),

    getChapters: (sourceId: string, url: string) =>
        api.get<string[]>("/api/novels/scrape", { action: "chapters", sourceId, url }),

    getChapter: (sourceId: string, url: string) =>
        api.get<any>("/api/novels/scrape", { action: "chapter", sourceId, url }),
};

/**
 * Home Page API
 */
export const home = {
    getFeatured: () => api.get<ApiResponse<any[]>>("/api/home/featured"),
    getRecentUpdates: () => api.get<ApiResponse<any[]>>("/api/home/recent"),
    getNewReleases: () => api.get<ApiResponse<any[]>>("/api/home/new"),
    getPopular: () => api.get<ApiResponse<any[]>>("/api/home/popular"),
    getGenres: () => api.get<ApiResponse<any[]>>("/api/home/genres"),
};
