/**
 * React Query Hooks for NovelVerse API
 * Type-safe hooks for data fetching with proper caching and error handling
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { novels, chapters, translations, ratings, reading, users } from "../api";
import type { Novel, Chapter, Translation } from "../api-types";

// Query keys for cache management
export const queryKeys = {
    novels: {
        all: ["novels"] as const,
        lists: () => [...queryKeys.novels.all, "list"] as const,
        list: (filters: Record<string, string | undefined>) =>
            [...queryKeys.novels.lists(), filters] as const,
        details: () => [...queryKeys.novels.all, "detail"] as const,
        detail: (slug: string) => [...queryKeys.novels.details(), slug] as const,
    },
    chapters: {
        all: ["chapters"] as const,
        lists: () => [...queryKeys.chapters.all, "list"] as const,
        list: (translationId: string) =>
            [...queryKeys.chapters.lists(), translationId] as const,
        details: () => [...queryKeys.chapters.all, "detail"] as const,
        detail: (id: string) => [...queryKeys.chapters.details(), id] as const,
    },
    translations: {
        all: ["translations"] as const,
        lists: () => [...queryKeys.translations.all, "list"] as const,
        list: (filters: Record<string, string | undefined>) =>
            [...queryKeys.translations.lists(), filters] as const,
    },
    reading: {
        all: ["reading"] as const,
        list: () => [...queryKeys.reading.all, "list"] as const,
    },
    user: {
        all: ["user"] as const,
        me: () => [...queryKeys.user.all, "me"] as const,
    },
};

// ============================================
// Novel Hooks
// ============================================

export function useNovels(params?: {
    page?: number;
    limit?: number;
    status?: "ongoing" | "completed" | "hiatus";
    sortBy?: "popularity" | "rating" | "updated" | "title";
    order?: "asc" | "desc";
}) {
    const stringParams = params
        ? Object.fromEntries(
            Object.entries(params).map(([k, v]) => [k, v?.toString()])
        )
        : undefined;

    return useQuery({
        queryKey: queryKeys.novels.list(stringParams || {}),
        queryFn: () => novels.list(stringParams),
    });
}

export function useNovel(slug: string) {
    return useQuery({
        queryKey: queryKeys.novels.detail(slug),
        queryFn: () => novels.getBySlug(slug),
        enabled: !!slug,
    });
}

export function useNovelSearch(query: string, page?: number, limit?: number) {
    return useQuery({
        queryKey: ["novels", "search", query, page, limit],
        queryFn: () =>
            novels.search({
                q: query,
                page: page?.toString(),
                limit: limit?.toString(),
            }),
        enabled: query.length > 0,
    });
}

// ============================================
// Chapter Hooks
// ============================================

export function useChapters(translationId: string, page?: number, limit?: number) {
    return useQuery({
        queryKey: queryKeys.chapters.list(translationId),
        queryFn: () =>
            chapters.list({
                translationId,
                page: page?.toString(),
                limit: limit?.toString(),
            }),
        enabled: !!translationId,
    });
}

export function useChapter(id: string) {
    return useQuery({
        queryKey: queryKeys.chapters.detail(id),
        queryFn: () => chapters.getById(id),
        enabled: !!id,
    });
}

// ============================================
// Translation Hooks
// ============================================

export function useTranslations(params?: {
    novelId?: string;
    language?: string;
    page?: number;
    limit?: number;
}) {
    const stringParams = params
        ? Object.fromEntries(
            Object.entries(params).map(([k, v]) => [k, v?.toString()])
        )
        : undefined;

    return useQuery({
        queryKey: queryKeys.translations.list(stringParams || {}),
        queryFn: () => translations.list(stringParams),
    });
}

// ============================================
// Reading List Hooks
// ============================================

export function useReadingList() {
    return useQuery({
        queryKey: queryKeys.reading.list(),
        queryFn: () => reading.getList(),
    });
}

export function useAddToReadingList() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: {
            novelId: string;
            status: "reading" | "completed" | "plan_to_read" | "dropped";
        }) => reading.addToList(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.reading.list() });
        },
    });
}

export function useUpdateReadingListStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            status,
        }: {
            id: string;
            status: "reading" | "completed" | "plan_to_read" | "dropped";
        }) => reading.updateListStatus(id, { status }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.reading.list() });
        },
    });
}

export function useRemoveFromReadingList() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => reading.removeFromList(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.reading.list() });
        },
    });
}

// ============================================
// Rating Hooks
// ============================================

export function useCreateRating() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: {
            translationId: string;
            rating: number;
            review?: string;
        }) => ratings.create(data),
        onSuccess: (_, variables) => {
            // Invalidate translation queries to refresh ratings
            queryClient.invalidateQueries({
                queryKey: queryKeys.translations.all,
            });
        },
    });
}

export function useDeleteRating() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => ratings.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.translations.all,
            });
        },
    });
}

// ============================================
// User Hooks
// ============================================

export function useUser() {
    return useQuery({
        queryKey: queryKeys.user.me(),
        queryFn: () => users.getMe(),
    });
}

export function useUpdateUserPreferences() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: {
            theme?: "light" | "dark" | "system";
            fontSize?: "small" | "medium" | "large" | "xlarge";
            fontFamily?: string;
        }) => users.updatePreferences(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.user.me() });
        },
    });
}
