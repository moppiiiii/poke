import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('go to poke-book page', async ({ page }) => {
  await page.goto('/poke-book');
});

test('run poke-book page accessibility Test', async ({ page }) => {
  await test.step('Test accessibility', async () => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    await expect(accessibilityScanResults.violations).toEqual([]);
  });
});
