import percySnapshot from "@percy/playwright"
import { test, expect } from "@playwright/test"

test.describe("Visual testing", () => {
  test.describe("Static pages", () => {
    test("should take screenshot of the homepage", async ({ page }) => {
      await page.goto("https://playwright.dev/")
      //@ts-ignore
      await percySnapshot(page, "Homepage")
    })
  })
})
