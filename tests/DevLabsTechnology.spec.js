
import {test, expect} from '@playwright/test';
import { DevLabsHomePage } from '../pages/DevLabsHomePage';

test('Open DevLabs Technology Homepage', async ({ page }) => 
    {
    await page.goto('https://devlabstechnology.com/');
    await expect(page).toHaveTitle(/DevLabs/i);
});

test('User navigates to Services', async ({ page }) => {
    const homePage = new DevLabsHomePage(page);
    await page.goto('https://devlabstechnology.com/');
    await homePage.servicesMenu().click();
    await expect(page).toHaveURL(/services/);
    await expect(homePage.servicesHeading()).toBeVisible();

});

test('User navigates to About Us', async ({ page }) => {

  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.aboutUsLink().click();
  await expect(page).toHaveURL(/about/i);
});


test('User navigates to Hire a Developer', async ({ page }) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.hireDeveloperLink().click();
  await expect(page).toHaveURL(/hire/i);
});

test('User navigates to Cloud Solutions services', async({page}) =>{
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await homePage.cloudSolutionsLink().click();
  await expect(page).toHaveURL(/cloud-solutions/i);
  await expect(
        homePage.cloudSolutionsHeading()
    ).toBeVisible();
});

test('User navigates to Software Development', async({page}) =>{
  const homePage = new DevLabsHomePage(page);
  test.setTimeout(60000);
  await page.goto('https://devlabstechnology.com/',{
    waitUntil: 'domcontentloaded'
  });
  await homePage.servicesMenu().hover();
  await homePage.softwareDevelopmentLink().click();
  await expect(page).toHaveURL(/software-development/i);
  await expect(
        homePage.softwareDevelopmentHeading()
    ).toBeVisible();
});

test('User navigates to Website Development', async({page}) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await homePage.websiteDevelopmentLink().click();
  await expect(page).toHaveURL(/website-development/i);
  await expect(
        homePage.websiteDevelopmentHeading()
        ).toBeVisible();
      });


test('User navigates to Mobile Applications', async ({page}) =>{
   const homePage = new DevLabsHomePage(page);
   await page.goto('https://devlabstechnology.com/');
   await homePage.servicesMenu().hover();
   await homePage.mobileApplicationsLink().click();
   await expect(page).toHaveURL(/mobile-applications/i);
   await expect(
        homePage.mobileApplicationsHeading()  
        ).toBeVisible();
      });

test('User navigates to UI/UX Designing', async ({page}) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/')
  await homePage.servicesMenu().hover();
  await homePage.uiUxDesigningLink().click()
  await expect(page).toHaveURL(/ui-ux-designing/i);
  await expect(
        homePage.uiUxDesignHeading() 
        ).toBeVisible();
});

test('User navigates to Product Development', async ({page}) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/')
  await homePage.servicesMenu().hover();
  await homePage.productDevelopmentLink().click();
  await expect(page).toHaveURL(/product-development/i);
  await expect(
        homePage.productDevelopmentHeading()
  ).toBeVisible();
});

test('User navigates to Business Consulting',async ({page}) => {
  test.setTimeout(60000);
  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.getByRole('link', { name: 'Business Consulting' }).first().click();
  //await page.locator('a[href="/service/business-consulting/"]').click();
  await expect(page).toHaveURL(/business-consulting/i);
  await expect(
        page.getByRole('heading', { 
          name:'Business Consulting', 
          exact: true
         }) 
        ).toBeVisible();
});

test.only('User navigates to Salesforce Service', async ({ page }) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await page.waitForTimeout(1000);
  await page.getByRole('link', {
    name: 'Salesforce Service'
  }).first().click();
  await expect(page).toHaveURL(/salesforce-service/i);
  await expect(
    homePage.salesforceServiceAndSolutionsHeading()
  ).toBeVisible();
});

test('User navigates to Digital Transformation', async ({ page }) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await page.waitForTimeout(1000);
  await page.getByRole('link', {
    name: 'Digital Transformation'
  }).click();
  await expect(page).toHaveURL(/digital-transformation/i);
  await expect(
    homePage.digitalTransformationHeading()
  ).toBeVisible();
});

test('User navigates to Data Science', async ({ page }) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await page.waitForTimeout(1000);
  await page.getByRole('link', {
    name: 'Data Science'
  }).click();
  await expect(page).toHaveURL(/data-science/i);
  await expect(
    homePage.dataScienceHeading()
  ).toBeVisible();
});

test('User navigates to Data Engineering', async ({ page }) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await page.waitForTimeout(1000);
  await page.getByRole('link', {
    name: 'Data Engineering'
  }).click();
  await expect(page).toHaveURL(/data-engineering/i);
  await expect(
    homePage.dataEngineeringHeading()
  ).toBeVisible();
});

test('User navigates to IT Staff Augmentation', async ({ page }) => {
  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/');
  await homePage.servicesMenu().hover();
  await page.waitForTimeout(1000);
  await page.getByRole('link', {
    name: 'IT Staff Augmentation'
  }).first().click();
  await expect(page).toHaveURL(/staff-augmentation/i);
  await expect(
    homePage.staffAugmentationHeading()
  ).toBeVisible();
});






























































































































































