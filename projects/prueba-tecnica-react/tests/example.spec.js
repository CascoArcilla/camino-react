import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";
const CAT_PREFIX_URL = "https://cataas.com/";
const RANDOM_POST = "https://catfact.ninja/fact";

test("app shows random fac and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");
  const button = await page.getByRole("button");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  expect(textContent?.length).toBeGreaterThan(0);
  expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();

  await button.click();

  const newTextContent = await text.textContent();
  const newImageSrc = await image.getAttribute("src");

  expect(newTextContent).not.toBe(textContent);
  expect(newImageSrc).not.toBe(imageSrc);
  expect(newImageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();
});
