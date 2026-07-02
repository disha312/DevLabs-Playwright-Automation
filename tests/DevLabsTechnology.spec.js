
import {test, expect} from '@playwright/test';

test('Open DevLabs Technology Homepage', async ({ page }) => 
    {
    await page.goto('https://devlabstechnology.com/');

    await expect(page).toHaveTitle(/DevLabs/i);
});

test('User navigates to Services', async ({ page }) => {

    await page.goto('https://devlabstechnology.com/');

    await page.getByRole('link', { name: 'Services ' }).click();

    await expect(page).toHaveURL(/services/);

    await expect(
        page.getByRole('heading', { name: 'Services', exact: true })
    ).toBeVisible();

});

test('User navigates to About Us', async ({ page }) => {
  await page.goto('https://devlabstechnology.com/');

  await page.getByRole('link', { name: 'About Us' }).first().click();;

  await expect(page).toHaveURL(/about/i);
});


test('User navigates to Hire a Developer', async ({ page }) => {

  await page.goto('https://devlabstechnology.com/');

  await page.getByRole('link', { name: 'Hire a Developer' }).first().click();

  await expect(page).toHaveURL(/hire/i);
});

