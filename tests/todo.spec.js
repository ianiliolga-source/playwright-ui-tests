import { test, expect } from '@playwright/test';

test('user can add a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByText('Learn Playwright')).toBeVisible();
});

test('user can complete a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

  await expect(page.getByText('Buy milk')).toBeVisible();
});