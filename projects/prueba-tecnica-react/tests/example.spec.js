// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";
const CAT_PREFIX_URL = "https://cataas.com/";

test("app shows random fac and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");
  const button = await page.getByRole("button");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();

  await button.click();

  const newTextContent = await text.textContent();
  const newImageSrc = await image.getAttribute("src");

  await expect(newTextContent).toBe(textContent);
  await expect(newImageSrc).toBe(imageSrc);
  await expect(newImageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();
});
