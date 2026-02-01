/**
 * Site-specific selector configuration
 * Allows easy customization of CSS selectors for different novel sites
 */
export interface SiteDecoder {
    name: string;
    baseUrl: string;
    selectors: {
        search: {
            container: string;
            title: string;
            url: string;
            cover?: string;
            author?: string;
        };
        novel: {
            title: string;
            cover: string;
            author: string;
            description: string;
            genres: string;
            status: string;
        };
        chapterList: string;
        chapter: {
            title: string;
            content: string;
        };
    };
}

/**
 * Predefined decoders for supported sites
 */
export const DECODERS: Record<string, SiteDecoder> = {
    novelbin: {
        name: "NovelBin",
        baseUrl: "https://novelbin.com",
        selectors: {
            search: {
                container: ".novel-item",
                title: ".novel-title a",
                url: ".novel-title a",
                cover: "img",
                author: ".author",
            },
            novel: {
                title: "h1.novel-title, h3.title",
                cover: ".book img, .novel-cover img",
                author: ".author a, .info-meta .author",
                description: ".summary .content, .desc-text",
                genres: ".categories a, .genres a",
                status: ".status, .novel-status",
            },
            chapterList: "#list-chapter a, .chapter-list a, .list-chapter a",
            chapter: {
                title: "h2, .chapter-title, .chr-title",
                content: "#chr-content, .chapter-content, .chr-c, #chapter-content",
            },
        },
    },
    royalroad: {
        name: "RoyalRoad",
        baseUrl: "https://www.royalroad.com",
        selectors: {
            search: {
                container: ".fiction-list-item",
                title: ".fiction-title a",
                url: ".fiction-title a",
                cover: "img.cover-art",
                author: ".author",
            },
            novel: {
                title: "h1.font-white",
                cover: "img.thumbnail",
                author: "h4.font-white a",
                description: ".description .hidden-content",
                genres: ".tags a.fiction-tag",
                status: ".label.label-default",
            },
            chapterList: "#chapters tbody tr td a",
            chapter: {
                title: "h1.font-white",
                content: ".chapter-content",
            },
        },
    },
    scribblehub: {
        name: "ScribbleHub",
        baseUrl: "https://www.scribblehub.com",
        selectors: {
            search: {
                container: ".search_main_box",
                title: ".search_title a",
                url: ".search_title a",
                cover: ".search_img img",
                author: ".search_author",
            },
            novel: {
                title: ".fic_title",
                cover: ".fic_image img",
                author: ".auth_name_fic",
                description: ".wi_fic_desc",
                genres: ".wi_fic_showtags a",
                status: ".pub_status",
            },
            chapterList: "#chpagedlist li .toc_a",
            chapter: {
                title: ".chapter-title",
                content: "#chp_raw",
            },
        },
    },
    freewebnovel: {
        name: "FreeWebNovel",
        baseUrl: "https://freewebnovel.com",
        selectors: {
            search: {
                container: ".col-novel-main .list-novel .row",
                title: ".novel-title a",
                url: ".novel-title a",
                cover: "img",
                author: ".author",
            },
            novel: {
                title: "h1.tit",
                cover: ".pic img",
                author: ".author a",
                description: ".desc",
                genres: ".info a[href*='genre']",
                status: ".info span:contains('Status')",
            },
            chapterList: "#idData li a",
            chapter: {
                title: ".chr-title, .chapter-title",
                content: ".txt, .chapter-content",
            },
        },
    },
    empirenovel: {
        name: "EmpireNovel",
        baseUrl: "https://empirenovel.com",
        selectors: {
            search: {
                container: ".archive-item", // Placeholder
                title: ".archive-title a",
                url: ".archive-title a",
                cover: "img",
                author: ".author",
            },
            novel: {
                title: "h1.entry-title",
                cover: ".poster img",
                author: ".author a",
                description: ".description",
                genres: ".genres a",
                status: ".status",
            },
            chapterList: ".chapter-list a",
            chapter: {
                title: ".chapter-title",
                content: ".entry-content",
            },
        },
    },
};
