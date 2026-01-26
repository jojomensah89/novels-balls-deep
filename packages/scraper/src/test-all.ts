import { createSource, getAvailableSources } from "./registry";
import type { Source } from "./types";

async function testSource(sourceName: string) {
    console.log(`\n=== Testing Source: ${sourceName} ===`);

    try {
        const source = createSource(sourceName as any);

        // 1. Test Search
        console.log("Searching for 'Shadow'...");
        const searchResults = await source.searchNovels("Shadow");
        console.log(`Found ${searchResults.length} novels`);

        if (searchResults.length === 0) {
            console.log("No novels found, skipping detail test");
            return;
        }

        const firstNovel = searchResults[0];
        console.log(`First result: ${firstNovel.title} (${firstNovel.sourceUrl})`);

        // 2. Test Novel Details
        console.log(`Fetching details for: ${firstNovel.title}`);
        const novel = await source.getNovel(firstNovel.sourceUrl);
        console.log(`Title: ${novel.title}`);
        console.log(`Author: ${novel.author}`);
        console.log(`Status: ${novel.status}`);
        console.log(`Genres: ${novel.genres?.join(", ")}`);
        console.log(`Description length: ${novel.description?.length} chars`);

        // 3. Test Chapter List
        console.log("Fetching chapter list...");
        const chapters = await source.getChapterList(novel.sourceUrl);
        console.log(`Found ${chapters.length} chapters`);

        if (chapters.length === 0) {
            console.log("No chapters found, skipping chapter content test");
            return;
        }

        // 4. Test Chapter Content (First and Last)
        const chapterToTest = [chapters[0], chapters[chapters.length - 1]];

        for (const chapterUrl of chapterToTest) {
            console.log(`Fetching chapter: ${chapterUrl}`);
            const start = Date.now();
            const chapter = await source.getChapter(chapterUrl);
            const duration = Date.now() - start;

            console.log(`Chapter ${chapter.chapterNumber}: ${chapter.title}`);
            console.log(`Content length: ${chapter.content.length} chars`);
            console.log(`Fetch duration: ${duration}ms`);

            // 5. Test Cache
            console.log("Fetching same chapter again (should be cached)...");
            const startCache = Date.now();
            await source.getChapter(chapterUrl);
            const durationCache = Date.now() - startCache;
            console.log(`Cached fetch duration: ${durationCache}ms`);

            if (durationCache < duration && durationCache < 50) {
                console.log("✅ Cache seems to be working");
            } else {
                console.log("⚠️ Cache might not be working or network was fast");
            }
        }

    } catch (error) {
        console.error(`Error testing ${sourceName}:`, error);
    }
}

async function main() {
    const args = process.argv.slice(2);
    const specificSource = args[0];

    if (specificSource) {
        await testSource(specificSource);
    } else {
        const sources = getAvailableSources();
        for (const source of sources) {
            await testSource(source);
        }
    }
}

main();
