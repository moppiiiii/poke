import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('go to 404 page', async ({ page }) => {
  await page.goto('/404');
});

test('run 404 page accessibility Test', async ({ page }) => {
  await test.step('Test accessibility', async () => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    await expect(accessibilityScanResults.violations).toEqual([]);
  });
});
