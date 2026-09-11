import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

    // Open application
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.getByPlaceholder('Username').fill('standard_user');

    // Enter password
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Verify Products page
    await expect(
        page.getByText('Products')
    ).toBeVisible();
});
