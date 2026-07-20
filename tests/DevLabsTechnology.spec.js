
import {test, expect} from '@playwright/test';
import { DevLabsHomePage } from '../pages/DevLabsHomePage';

/*test('Open DevLabs Technology Homepage', async ({ page }) => 
    {
    await page.goto('https://devlabstechnology.com/');
    await expect(page).toHaveTitle(/DevLabs/i);
});*/

test('Open DevLabs Technology Homepage', async ({ page }) => {

  test.setTimeout(60000);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveTitle(/DevLabs/i);
});

test('User navigates to Services', async ({ page }) => {
    test.setTimeout(60000);

    const homePage = new DevLabsHomePage(page);

    await page.goto('https://devlabstechnology.com/',{
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    await homePage.servicesMenu().click();
    await expect(page).toHaveURL(/services/);
    await expect(homePage.servicesHeading()).toBeVisible();

});

test('User navigates to About Us', async ({ page }) => {
  
   test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);
  //await page.goto('https://devlabstechnology.com/');

  await page.goto('https://devlabstechnology.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
});
  await homePage.aboutUsLink().click();
  await expect(page).toHaveURL(/about/i);
});


test('User navigates to Hire a Developer', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);
  await page.goto('https://devlabstechnology.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000});
  await homePage.hireDeveloperLink().click();
  await expect(page).toHaveURL(/hire/i);
});

test('User navigates to Cloud Solutions services', async({page}) =>{

  test.setTimeout(60000);
  const homePage = new DevLabsHomePage(page);
  //await page.goto('https://devlabstechnology.com/');
  await page.goto('https://devlabstechnology.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000});
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
  test.setTimeout(60000);
  //await page.goto('https://devlabstechnology.com/');
  await page.goto('https://devlabstechnology.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
  });
  await homePage.servicesMenu().hover();
  await homePage.websiteDevelopmentLink().click();
  await expect(page).toHaveURL(/website-development/i);
  await expect(
        homePage.websiteDevelopmentHeading()
        ).toBeVisible();
      });


test('User navigates to Mobile Applications', async ({page}) =>{
   const homePage = new DevLabsHomePage(page);
  
   test.setTimeout(60000);
   
   await page.goto('https://devlabstechnology.com/');
   await page.goto('https://devlabstechnology.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
  });
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
  const homePage = new DevLabsHomePage(page);
  test.setTimeout(60000);
  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await homePage.servicesMenu().hover();
  //await page.getByRole('link', { name: 'Business Consulting' }).first().click();
  await page.locator('a[href="/service/business-consulting/"]').first().click();
  await expect(page).toHaveURL(/business-consulting/i);
  await expect(
        page.getByRole('heading', { 
          name:'Business Consulting', 
          exact: true
         }) 
        ).toBeVisible();
});

test('User navigates to Salesforce Service', async ({ page }) => {
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
  //await page.goto('https://devlabstechnology.com/');
  test.setTimeout(60000);

  await page.goto('https://devlabstechnology.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
});
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
  //await page.goto('https://devlabstechnology.com/');
  
  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  

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

test('User contacts experts from Service page', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.servicesMenu().hover();

  await page.locator('a[href="/service/cloud-solutions/"]').first().click();

  await expect(page).toHaveURL(/cloud-solutions/i);

  
  const talkToExpertsBtn = page
    .getByRole('link', { name: 'Talk to Our Experts' })
    .first();

  await talkToExpertsBtn.scrollIntoViewIfNeeded();

  await expect(talkToExpertsBtn).toBeVisible();

  await talkToExpertsBtn.click();


  await expect(page).toHaveURL(/contact/i);

  await expect(
    page.getByRole('heading', {
      name: 'Contact',
      exact: true
    })
  ).toBeVisible();


  await page.getByText('Let’s Connect').scrollIntoViewIfNeeded();

  await expect(
    page.getByText('Let’s Connect')
  ).toBeVisible();
});

test('User submits Contact form successfully', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/contact/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.contactNameField().fill('Same');

  await homePage.contactEmailField().fill('same12@gmail.com');

  await homePage.contactAddressField().fill('1245/78 B Block XYZ');

  await homePage.contactMessageField().fill(
    'This is an automated Playwright test messages.'
  );

  await homePage.submitNowButton().click();

  await page.waitForTimeout(5000);

  await expect(
  page.locator('.wpcf7-response-output')
  ).toBeVisible();
});

test('User submits Contact form with invalid email', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/contact/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  
  await homePage.contactNameField().fill('Vanshika');

  await homePage.contactEmailField().type('123');
  
  await homePage.submitNowButton().click();

  await expect(
    page.locator('.wpcf7-not-valid-tip').first()
  ).toBeVisible();

  await expect(
    homePage.validationMessage()
  ).toBeVisible();
});

test('User submits Contact form with blank Address', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/contact/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.contactNameField().fill('bob');

  await homePage.contactEmailField().fill('bob1@gmail.com');

  // Address left blank
  // Message left blank

  await homePage.submitNowButton().click();

  await expect(
  page.locator('.wpcf7-response-output')
  ).toContainText(
  'One or more fields have an error. Please check and try again');
});


test('User views About Us information', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.aboutUsLink().click();

  await expect(page).toHaveURL(/about/i);

  await homePage.aboutOurCompanyHeading().scrollIntoViewIfNeeded();
  await expect(
    homePage.aboutOurCompanyHeading()
  ).toBeVisible();

  await homePage.ourValuesHeading().scrollIntoViewIfNeeded();
  await expect(
    homePage.ourValuesHeading()
  ).toBeVisible();

  await homePage.ourTeamHeading().scrollIntoViewIfNeeded();
  await expect(
    homePage.ourTeamHeading()
  ).toBeVisible();

  await homePage.contactUsHeading().scrollIntoViewIfNeeded();
  await expect(
    homePage.contactUsHeading()
  ).toBeVisible();

});

test('User navigates to Services from Discover More', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.aboutUsLink().click();

  await homePage.discoverMoreButton()
    .scrollIntoViewIfNeeded();

  await homePage.discoverMoreButton().click();

  await expect(page).toHaveURL(/services/i);

  await expect(
    homePage.servicesHeading()
  ).toBeVisible();

});

test('User views Hire a Developer technology categories', async ({ page }) => {

  test.setTimeout(120000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 120000
  });

  await homePage.hireDeveloperLink().click();

  await homePage.exploreMoreButton().click();

  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(500);
  }

  await expect(
    homePage.frontEndTechnologiesHeading()
  ).toBeVisible({ timeout: 15000 });

  await homePage.backEndTechnologiesHeading()
    .scrollIntoViewIfNeeded();

  await expect(
    homePage.backEndTechnologiesHeading()
  ).toBeVisible();

  await homePage.mobileTechnologiesHeading()
    .scrollIntoViewIfNeeded();

  await expect(
    homePage.mobileTechnologiesHeading()
  ).toBeVisible();

  await homePage.crmTechnologiesHeading()
    .scrollIntoViewIfNeeded();

  await expect(
    homePage.crmTechnologiesHeading()
  ).toBeVisible();

  await homePage.cloudComputingTechnologiesHeading()
    .scrollIntoViewIfNeeded();

  await expect(
    homePage.cloudComputingTechnologiesHeading()
  ).toBeVisible();

  await homePage.qualityEngineeringHeading()
    .scrollIntoViewIfNeeded();

  await expect(
    homePage.qualityEngineeringHeading()
  ).toBeVisible();

});

  test('User navigates to End to End Software Development', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.hireDeveloperLink().click();

  await homePage.endToEndSoftwareDevelopmentLink()
    .scrollIntoViewIfNeeded();

  await homePage.endToEndSoftwareDevelopmentLink().click();

  await expect(page).toHaveURL(/software-development/i);

  await expect(
    homePage.softwareDevelopmentHeading()
  ).toBeVisible();

});

test('User navigates to Staff Augmentation', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.hireDeveloperLink().click();

  await homePage.staffAugmentationLink()
    .scrollIntoViewIfNeeded();

  await homePage.staffAugmentationLink().click();

  await expect(page).toHaveURL(/staff-augmentation/i);

  await expect(
    homePage.staffAugmentationPageHeading()
  ).toBeVisible();

});

test('User views Why Choose Us section', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.whyChooseUsSection()
    .scrollIntoViewIfNeeded();

  await expect(
    homePage.whyChooseUsSection()
  ).toBeVisible();

  await expect(
    homePage.ourMissionButton()
  ).toBeVisible();

  await expect(
    homePage.ourVisionButton()
  ).toBeVisible();

  await expect(
    homePage.ourValueButton()
  ).toBeVisible();

});

test('User views Mission content', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.whyChooseUsSection()
    .scrollIntoViewIfNeeded();

  await homePage.ourMissionButton().click();

  await expect(
    homePage.missionContent()
  ).toBeVisible();

});

test('User views Vision content', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.whyChooseUsSection()
    .scrollIntoViewIfNeeded();

  await homePage.ourVisionButton().click();

  await expect(
    homePage.visionContent()
  ).toBeVisible();

});

test('User views Value content', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.whyChooseUsSection()
    .scrollIntoViewIfNeeded();

  await homePage.ourValueButton().click();

  await expect(
    homePage.valueContent()
  ).toBeVisible();

});

test('User navigates to Payment Gateway Upgrade project', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.recentlyCompletedWorkSection()
    .scrollIntoViewIfNeeded();

  await homePage.paymentGatewayUpgradeLink().click();

  await expect(page).toHaveURL(/payment-gateway-upgrade/i);

  await expect(
    homePage.paymentGatewayUpgradeHeading()
  ).toBeVisible();

});

test('User navigates to Modernization of Legacy Application project', async ({ page }) => {

  test.setTimeout(60000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await homePage.recentlyCompletedWorkSection()
    .scrollIntoViewIfNeeded();

  await homePage.modernizationOfLegacyApplicationLink().click();

  await expect(page).toHaveURL(/modernization-of-legacy/i);

  await expect(
    homePage.modernizationOfLegacyApplicationHeading()
  ).toBeVisible();

});

test('User reads a blog article', async ({ page }) => {

  test.setTimeout(120000);

  const homePage = new DevLabsHomePage(page);

  await page.goto('https://devlabstechnology.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 120000
  });
  
  await homePage.readMoreButton()
    .scrollIntoViewIfNeeded();

  await homePage.readMoreButton().click();

  await expect(
    homePage.blogArticleHeading()
  ).toBeVisible();

});


































































































































































