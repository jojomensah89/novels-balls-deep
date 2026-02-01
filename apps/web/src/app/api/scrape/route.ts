import { NextRequest, NextResponse } from "next/server";
import { createSource, getAvailableSources } from "@novels-balls-deep/scraper";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");
    const sourceId = searchParams.get("sourceId");

    if (!sourceId || !getAvailableSources().includes(sourceId as any)) {
        return NextResponse.json({ error: "Invalid or missing sourceId" }, { status: 400 });
    }

    try {
        const source = createSource(sourceId as any);

        switch (action) {
            case "search":
                const query = searchParams.get("query");
                if (!query) return NextResponse.json({ error: "Missing query" }, { status: 400 });
                const novels = await source.searchNovels(query);
                return NextResponse.json(novels);

            case "novel":
                const novelUrl = searchParams.get("url");
                if (!novelUrl) return NextResponse.json({ error: "Missing url" }, { status: 400 });
                const novel = await source.getNovel(novelUrl);
                return NextResponse.json(novel);

            case "chapters":
                const chapterNovelUrl = searchParams.get("url");
                if (!chapterNovelUrl) return NextResponse.json({ error: "Missing url" }, { status: 400 });
                const chapters = await source.getChapterList(chapterNovelUrl);
                return NextResponse.json(chapters);

            case "chapter":
                const chapterUrl = searchParams.get("url");
                if (!chapterUrl) return NextResponse.json({ error: "Missing url" }, { status: 400 });
                const chapter = await source.getChapter(chapterUrl);
                return NextResponse.json(chapter);

            default:
                return NextResponse.json({ error: "Invalid action" }, { status: 400 });
        }
    } catch (error: any) {
        console.error("Scraper API Error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
