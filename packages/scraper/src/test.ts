import { NovelBinSource } from "./index";

async function testScraper() {
    console.log("🚀 Testing NovelBin scraper with 'Swallowed Star'...\n");

    const scraper = new NovelBinSource({
        maxConcurrency: 3,
    });

    try {
        // Search for Swallowed Star
        console.log("📖 Searching for 'Swallowed Star'...");
        const searchResults = await scraper.searchNovels("Swallowed Star");

        if (searchResults.length === 0) {
            console.log("❌ No results found");
            return;
        }

        console.log(`✅ Found ${searchResults.length} results:`);
        searchResults.slice(0, 3).forEach((novel, i) => {
            console.log(`  ${i + 1}. ${novel.title} - ${novel.sourceUrl}`);
        });

        // Get details of first result
        const novelUrl = searchResults[0].sourceUrl;
        console.log(`\n📚 Fetching novel details from: ${novelUrl}`);

        const novel = await scraper.getNovel(novelUrl);
        console.log(`\n✅ Novel Details:`);
        console.log(`  Title: ${novel.title}`);
        console.log(`  Author: ${novel.author}`);
        console.log(`  Status: ${novel.status}`);
        console.log(`  Genres: ${novel.genres?.join(", ")}`);
        console.log(`  Description: ${novel.description?.substring(0, 150)}...`);

        // Get chapter list
        console.log(`\n📑 Fetching chapter list...`);
        const chapterUrls = await scraper.getChapterList(novelUrl);
        console.log(`✅ Found ${chapterUrls.length} chapters`);

        // Scrape first 3 chapters as test
        if (chapterUrls.length > 0) {
            console.log(`\n📖 Scraping first 3 chapters...`);

            for (let i = 0; i < Math.min(3, chapterUrls.length); i++) {
                const chapter = await scraper.getChapter(chapterUrls[i]);
                console.log(`  ✅ Chapter ${chapter.chapterNumber}: ${chapter.title || "Untitled"}`);
                console.log(`     Content length: ${chapter.content.length} characters`);
                console.log(`     Preview: ${chapter.content.substring(0, 100)}...`);
            }
        }

        console.log("\n✨ Test completed successfully!");

    } catch (error) {
        console.error("❌ Error:", error);
    }
}

testScraper();
