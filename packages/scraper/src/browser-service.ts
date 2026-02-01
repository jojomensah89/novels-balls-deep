import { chromium, type Browser, type BrowserContext, type Page } from "playwright";

export class BrowserService {
    private static instance: BrowserService;
    private browser: Browser | null = null;
    private context: BrowserContext | null = null;
    private isClosing = false;

    private constructor() { }

    static getInstance(): BrowserService {
        if (!BrowserService.instance) {
            BrowserService.instance = new BrowserService();
        }
        return BrowserService.instance;
    }

    async getBrowser(): Promise<Browser> {
        if (!this.browser || !this.browser.isConnected()) {
            console.log("BrowserService: Launching chromium...");
            this.browser = await chromium.launch({
                headless: true, // Set to false for debugging
                args: [
                    "--no-sandbox",
                    "--disable-setuid-sandbox",
                    "--disable-infobars",
                    "--window-position=0,0",
                    "--ignore-certifcate-errors",
                    "--ignore-certifcate-errors-spki-list",
                    "--disable-blink-features=AutomationControlled", // Key for stealth
                ],
            });

            this.browser.on("disconnected", () => {
                this.browser = null;
                this.context = null;
            });
        }
        return this.browser;
    }

    async getContext(): Promise<BrowserContext> {
        if (!this.context) {
            const browser = await this.getBrowser();
            this.context = await browser.newContext({
                userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                viewport: { width: 1920, height: 1080 },
                deviceScaleFactor: 1,
                hasTouch: false,
                isMobile: false,
                javaScriptEnabled: true,
                locale: "en-US",
                timezoneId: "America/New_York",
            });

            // Add stealth scripts
            await this.context.addInitScript(() => {
                // Overwrite the `plugins` property to use a custom getter.
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => false,
                });
            });
        }
        return this.context;
    }

    async getPage(): Promise<Page> {
        console.log("BrowserService: Getting context...");
        const context = await this.getContext();
        console.log("BrowserService: Creating page...");
        const page = await context.newPage();

        // Optimizations to block heavy resources
        await page.route("**/*", (route) => {
            const request = route.request();
            const resourceType = request.resourceType();
            if (["image", "stylesheet", "font", "media"].includes(resourceType)) {
                route.abort();
            } else {
                route.continue();
            }
        });

        return page;
    }

    async close(): Promise<void> {
        if (this.browser && !this.isClosing) {
            this.isClosing = true;
            await this.browser.close();
            this.browser = null;
            this.context = null;
            this.isClosing = false;
        }
    }
}
