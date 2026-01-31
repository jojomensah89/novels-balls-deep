import type { Metadata } from "next";

interface NovelMetadata {
    title: string;
    author: string;
    description?: string;
    coverImage?: string;
    slug: string;
    genres?: string[];
    chapterCount?: number;
    rating?: number;
    ratingCount?: number;
}

interface ChapterMetadata {
    novelTitle: string;
    novelSlug: string;
    chapterNumber: number;
    chapterTitle?: string;
    content?: string;
    wordCount?: number;
}

const SITE_NAME = "NovelVerse";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://novelverse.com";
const SITE_DESCRIPTION =
    "Discover and read thousands of translated novels with community-rated translations. Your destination for quality web novels.";

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata(): Metadata {
    return {
        title: `${SITE_NAME} - Discover Translated Novels`,
        description: SITE_DESCRIPTION,
        openGraph: {
            title: `${SITE_NAME} - Discover Translated Novels`,
            description: SITE_DESCRIPTION,
            url: SITE_URL,
            siteName: SITE_NAME,
            type: "website",
            images: [
                {
                    url: `${SITE_URL}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: SITE_NAME,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${SITE_NAME} - Discover Translated Novels`,
            description: SITE_DESCRIPTION,
            images: [`${SITE_URL}/og-image.png`],
        },
        alternates: {
            canonical: SITE_URL,
        },
    };
}

/**
 * Generate metadata for novel detail page
 */
export function generateNovelMetadata(novel: NovelMetadata): Metadata {
    const title = `${novel.title} by ${novel.author} | Read Online - ${SITE_NAME}`;
    const description =
        novel.description
            ? `Read ${novel.title} by ${novel.author}. ${novel.description.slice(0, 120)}... ${novel.chapterCount || 0} chapters available.`
            : `Read ${novel.title} by ${novel.author} online. ${novel.chapterCount || 0} chapters available on ${SITE_NAME}.`;

    const url = `${SITE_URL}/novel/${novel.slug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            type: "book",
            images: novel.coverImage
                ? [
                    {
                        url: novel.coverImage,
                        width: 800,
                        height: 1200,
                        alt: novel.title,
                    },
                ]
                : [],
            // @ts-ignore - book specific OG tags
            book: {
                author: novel.author,
                tags: novel.genres,
            },
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: novel.coverImage ? [novel.coverImage] : [],
        },
        alternates: {
            canonical: url,
        },
    };
}

/**
 * Generate metadata for chapter page
 */
export function generateChapterMetadata(chapter: ChapterMetadata): Metadata {
    const title = `${chapter.novelTitle} - Chapter ${chapter.chapterNumber}${chapter.chapterTitle ? `: ${chapter.chapterTitle}` : ""} | ${SITE_NAME}`;

    const description = chapter.content
        ? `Read Chapter ${chapter.chapterNumber} of ${chapter.novelTitle}. ${chapter.content.slice(0, 140)}...`
        : `Read Chapter ${chapter.chapterNumber} of ${chapter.novelTitle} on ${SITE_NAME}.`;

    const url = `${SITE_URL}/novel/${chapter.novelSlug}/chapter/${chapter.chapterNumber}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            type: "article",
            // @ts-ignore - article specific OG tags
            article: {
                publishedTime: new Date().toISOString(),
                section: "Web Novel",
                tags: [chapter.novelTitle, "Chapter", "Web Novel"],
            },
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
        alternates: {
            canonical: url,
        },
    };
}

/**
 * Generate metadata for browse/filter pages
 */
export function generateBrowseMetadata(params: {
    status?: "ongoing" | "completed" | "hiatus";
    genre?: string;
    page?: number;
}): Metadata {
    const { status, genre, page = 1 } = params;

    let title = "Browse Novels";
    let description = "Discover thousands of translated web novels.";

    if (status) {
        title = `${status.charAt(0).toUpperCase() + status.slice(1)} Novels`;
        description = `Browse ${status} translated web novels. Find your next great read.`;
    }

    if (genre) {
        title = `${genre} Novels - Best ${genre} Web Novels`;
        description = `Discover the best ${genre} web novels. Read ${genre} stories translated by the community.`;
    }

    if (page > 1) {
        title += ` - Page ${page}`;
    }

    title += ` | ${SITE_NAME}`;

    const url = `${SITE_URL}/novels${genre ? `/genre/${genre}` : ""}${page > 1 ? `?page=${page}` : ""}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            type: "website",
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
        alternates: {
            canonical: url,
        },
    };
}

/**
 * Generate metadata for search results
 */
export function generateSearchMetadata(query: string): Metadata {
    const title = `Search results for "${query}" | ${SITE_NAME}`;
    const description = `Find novels matching "${query}". Search thousands of translated web novels.`;

    return {
        title,
        description,
        robots: {
            index: false, // Don't index search results
            follow: true,
        },
    };
}
