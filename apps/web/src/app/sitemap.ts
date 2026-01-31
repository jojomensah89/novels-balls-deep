import { MetadataRoute } from "next";
import { novels } from "@/lib/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://novelverse.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Fetch all novels for sitemap
    const { data: novelsList } = await novels.list({
        limit: "1000", // Adjust based on your needs
    });

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/novels`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    // Novel pages
    const novelPages: MetadataRoute.Sitemap = novelsList.map((novel) => ({
        url: `${SITE_URL}/novel/${novel.slug}`,
        lastModified: new Date(novel.updatedAt || Date.now()),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // TODO: Add chapter pages (might need separate sitemap due to volume)
    // TODO: Add genre pages

    return [...staticPages, ...novelPages];
}
