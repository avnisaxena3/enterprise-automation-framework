// @ts-check
import { test, expect } from '@playwright/test';
import Homepage from '../pages/Homepage.js';

test('Verify Playwright website title', async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


