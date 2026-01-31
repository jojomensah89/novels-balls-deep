/**
 * API Response Types
 * These types match the backend API responses for type-safe React Query usage
 */

// Common pagination type
export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: PaginationMeta;
}

// Novel types
export interface Novel {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    author: string;
    coverImage: string | null;
    status: "ongoing" | "completed" | "hiatus";
    views: number;
    createdAt: string;
    updatedAt: string;
}

export interface NovelDetail extends Novel {
    // Additional fields that might be included in detail view
    chapterCount?: number;
    averageRating?: number;
    ratingCount?: number;
}

// Chapter types
export interface Chapter {
    id: string;
    translationId: string;
    chapterNumber: number;
    title: string | null;
    content: string;
    wordCount: number;
    createdAt: string;
    updatedAt: string;
}

// Translation types
export interface Translation {
    id: string;
    novelId: string;
    translatorName: string;
    language: string;
    sourceUrl: string | null;
    status: "active" | "dropped" | "completed";
    chapterCount: number;
    averageRating: number | null;
    createdAt: string;
    updatedAt: string;
}

// Rating types
export interface Rating {
    id: string;
    translationId: string;
    userId: string;
    rating: number;
    review: string | null;
    createdAt: string;
    updatedAt: string;
}

// Reading list types
export interface ReadingListItem {
    id: string;
    userId: string;
    novelId: string;
    status: "reading" | "completed" | "plan_to_read" | "dropped";
    createdAt: string;
    updatedAt: string;
    novel?: Novel; // Populated in some responses
}

// Reading progress types
export interface ReadingProgress {
    id: string;
    userId: string;
    chapterId: string;
    progress: number;
    createdAt: string;
    updatedAt: string;
}

// User types
export interface User {
    id: string;
    email: string;
    name: string | null;
    role: "user" | "admin";
    createdAt: string;
}

export interface UserPreferences {
    theme: "light" | "dark" | "system";
    fontSize: "small" | "medium" | "large" | "xlarge";
    fontFamily: string;
}

// Admin stats types
export interface AdminStats {
    totalNovels: number;
    totalChapters: number;
    totalUsers: number;
    totalRatings: number;
}

// API response wrappers
export interface ApiResponse<T> {
    data: T;
}

export interface ApiError {
    error: string;
    message?: string;
}
