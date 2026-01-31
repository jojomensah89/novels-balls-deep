interface NovelStructuredData {
    title: string;
    author: string;
    description?: string;
    coverImage?: string;
    slug: string;
    genres?: string[];
    rating?: number;
    ratingCount?: number;
    language?: string;
}

interface ChapterStructuredData {
    novelTitle: string;
    novelSlug: string;
    chapterNumber: number;
    chapterTitle?: string;
    content?: string;
    wordCount?: number;
    publishedAt?: Date;
    translatorName?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://novelverse.com";

/**
 * Generate Book schema for novel pages
 */
export function generateBookSchema(novel: NovelStructuredData) {
    return {
        "@context": "https://schema.org",
        "@type": "Book",
        name: novel.title,
        author: {
            "@type": "Person",
            name: novel.author,
        },
        description: novel.description,
        genre: novel.genres,
        inLanguage: novel.language || "en",
        url: `${SITE_URL}/novel/${novel.slug}`,
        image: novel.coverImage,
        ...(novel.rating &&
            novel.ratingCount && {
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: novel.rating,
                reviewCount: novel.ratingCount,
                bestRating: 5,
                worstRating: 1,
            },
        }),
    };
}

/**
 * Generate Article schema for chapter pages
 */
export function generateArticleSchema(chapter: ChapterStructuredData) {
    const headline = `${chapter.novelTitle} - Chapter ${chapter.chapterNumber}${chapter.chapterTitle ? `: ${chapter.chapterTitle}` : ""}`;

    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        articleBody: chapter.content?.slice(0, 500), // First 500 chars
        author: {
            "@type": "Person",
            name: chapter.translatorName || "Unknown Translator",
        },
        datePublished: chapter.publishedAt?.toISOString(),
        publisher: {
            "@type": "Organization",
            name: "NovelVerse",
            url: SITE_URL,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/novel/${chapter.novelSlug}/chapter/${chapter.chapterNumber}`,
        },
        wordCount: chapter.wordCount,
    };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "NovelVerse",
        url: SITE_URL,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

/**
 * Helper to render JSON-LD script tag
 */
export function renderStructuredData(data: object) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
