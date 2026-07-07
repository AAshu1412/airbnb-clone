// Visual-QA capture for the Airbnb clone.
// Usage: node scripts/shot.mjs [baseUrl] [outDir]
// Requires: bunx playwright install chromium (or a cached Playwright chromium).
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] || "http://127.0.0.1:3000/";
const out = process.argv[3] || "/tmp/airbnb-clone-shots";
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: `${out}/listing-fold.png` });
await page.screenshot({ path: `${out}/listing-full.png`, fullPage: true });

// Photo tour
await page.getByRole("button", { name: /Show all photos/i }).click();
await page.waitForTimeout(600);
await page.screenshot({ path: `${out}/photo-tour.png` });

// Lightbox from the first tour photo + arrow-key nav
await page.getByRole("button", { name: /^Open / }).first().click();
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}/lightbox.png` });
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(400);
await page.screenshot({ path: `${out}/lightbox-next.png` });

console.log(`Saved screenshots to ${out}`);
await browser.close();
