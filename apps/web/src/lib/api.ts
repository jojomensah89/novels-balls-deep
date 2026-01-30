import { env } from "@novels-balls-deep/env/web";

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
            credentials: "include", // Important for Better Auth cookies
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({
                error: "An error occurred",
            }));
            throw new Error(error.error || `HTTP ${response.status}`);
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
        sortBy?: "popularity" | "rating" | "updated" | "title";
        order?: "asc" | "desc";
    }) => api.get("/api/novels", params as Record<string, string>),

    search: (params: { q: string; page?: string; limit?: string }) =>
        api.get("/api/novels/search", params as Record<string, string>),

    getBySlug: (slug: string) => api.get(`/api/novels/${slug}`),
};

/**
 * Chapters API
 */
export const chapters = {
    list: (params: { translationId: string; page?: string; limit?: string }) =>
        api.get("/api/chapters", params as Record<string, string>),

    getById: (id: string) => api.get(`/api/chapters/${id}`),
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
        sortBy?: "updated" | "chapters" | "rating";
        order?: "asc" | "desc";
    }) => api.get("/api/translations", params as Record<string, string>),

    getById: (id: string) => api.get(`/api/translations/${id}`),

    create: (data: {
        novelId: string;
        translatorName: string;
        language: string;
        sourceUrl?: string;
    }) => api.post("/api/translations", data),

    update: (
        id: string,
        data: {
            translatorName?: string;
            sourceUrl?: string;
            status?: "active" | "dropped" | "completed";
        }
    ) => api.patch(`/api/translations/${id}`, data),
};

/**
 * Ratings API
 */
export const ratings = {
    create: (data: {
        translationId: string;
        rating: number;
        review?: string;
    }) => api.post("/api/ratings", data),

    delete: (id: string) => api.delete(`/api/ratings/${id}`),
};

/**
 * Reading API
 */
export const reading = {
    getList: () => api.get("/api/reading/list"),

    addToList: (data: {
        novelId: string;
        status: "reading" | "completed" | "plan_to_read" | "dropped";
    }) => api.post("/api/reading/list", data),

    updateListStatus: (
        id: string,
        data: { status: "reading" | "completed" | "plan_to_read" | "dropped" }
    ) => api.patch(`/api/reading/list/${id}`, data),

    removeFromList: (id: string) => api.delete(`/api/reading/list/${id}`),

    updateProgress: (data: { chapterId: string; progress: number }) =>
        api.post("/api/reading/progress", data),
};

/**
 * Users API
 */
export const users = {
    getMe: () => api.get("/api/users/me"),

    updatePreferences: (data: unknown) =>
        api.patch("/api/users/preferences", data),
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
    }) => api.post("/api/admin/novels", data),

    updateNovel: (id: string, data: Partial<{
        title: string;
        slug: string;
        description: string;
        author: string;
        coverImage: string;
        status: "ongoing" | "completed" | "hiatus";
    }>) => api.patch(`/api/admin/novels/${id}`, data),

    deleteNovel: (id: string) => api.delete(`/api/admin/novels/${id}`),

    getStats: () => api.get("/api/admin/stats"),
};
