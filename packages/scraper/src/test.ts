import { NovelBinSource } from "./sources/novelbin";
import { EmpireNovelSource } from "./sources/empirenovel";
import { BrowserService } from "./browser-service";

async function testSource(sourceName: string, source: any, query: string) {
    console.log(`\n🚀 Testing ${sourceName} scraper with '${query}'...`);

    try {
        // Search
        console.log(`📖 Searching...`);
        const searchResults = await source.searchNovels(query);

        if (searchResults.length === 0) {
            console.log("❌ No results found");
            return;
        }

        console.log(`✅ Found ${searchResults.length} results:`);
        searchResults.slice(0, 3).forEach((novel: any, i: number) => {
            console.log(`  ${i + 1}. ${novel.title} - ${novel.sourceUrl}`);
        });

        // Get details of first result
        const novelUrl = searchResults[0].sourceUrl;
        console.log(`\n📚 Fetching novel details from: ${novelUrl}`);

        const novel = await source.getNovel(novelUrl);
        console.log(`✅ Novel Details:`);
        console.log(`  Title: ${novel.title}`);
        console.log(`  Author: ${novel.author}`);
        console.log(`  Status: ${novel.status}`);
        console.log(`  Genres: ${novel.genres?.join(", ")}`);

        // Get chapter list
        console.log(`\n📑 Fetching chapter list...`);
        const chapterUrls = await source.getChapterList(novelUrl);
        console.log(`✅ Found ${chapterUrls.length} chapters`);

        // Scrape first chapter
        if (chapterUrls.length > 0) {
            console.log(`\n📖 Scraping first chapter...`);
            const chapter = await source.getChapter(chapterUrls[0]);
            console.log(`  ✅ Chapter ${chapter.chapterNumber}: ${chapter.title || "Untitled"}`);
            // console.log(`     Content length: ${chapter.content.length} characters`); // content is too long
        }

    } catch (error) {
        console.error(`❌ Error testing ${sourceName}:`, error);
    }
}

async function runTests() {
    const browserService = BrowserService.getInstance();

    // Create an adapter to match BrowserProvider interface if needed
    // BrowserService.getInstance() returns an object with getPage() so it matches loosely if unchecked,
    // but BaseSource expects { getPage: () => Promise<Page> }
    // Let's ensure strict type compat if we can, or just pass it if it matches structurally.
    // BrowserService has getPage() returning Playwright Page. BaseSource expects any.

    const provider = {
        getPage: () => browserService.getPage(),
        close: () => browserService.close()
    };

    const novelBin = new NovelBinSource({ browserProvider: provider });
    await testSource("NovelBin", novelBin, "Swallowed Star");

    const empireNovel = new EmpireNovelSource({ browserProvider: provider });
    await testSource("EmpireNovel", empireNovel, "Swallowed Star");

    await browserService.close();
}

runTests();
