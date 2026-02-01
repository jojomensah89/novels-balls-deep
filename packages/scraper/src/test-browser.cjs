const { chromium } = require("playwright");

async function test() {
    console.log("Launching browser...");
    const browser = await chromium.launch({ headless: true });
    console.log("Browser launched.");
    const page = await browser.newPage();
    console.log("Page created. Navigating to google...");
    await page.goto("https://www.google.com");
    console.log("Navigated to " + await page.title());
    await browser.close();
    console.log("Done.");
}

test().catch(console.error);
