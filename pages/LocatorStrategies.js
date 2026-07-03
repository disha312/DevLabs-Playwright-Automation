
export class LocatorStrategies {

    constructor(page) {
        this.page = page;
    }

    // Services Menu

    servicesRole = () =>
        this.page.getByRole('link', { name: 'Services' });

    servicesText = () =>
        this.page.getByText('Services');

    servicesCss = () =>
        this.page.locator('a[href*="services"]');

    servicesXpath = () =>
        this.page.locator("//span[contains(text(),'Services')]");


    // About Us

    aboutUsRole = () =>
        this.page.getByRole('link', { name: 'About Us' });

    aboutUsText = () =>
        this.page.getByText('About Us');

    aboutUsCss = () =>
        this.page.locator('a[href*="about-us"]');

    aboutUsXpath = () =>
        this.page.locator("//a[contains(text(),'About Us')]");


    // Hire a Developer

    hireDeveloperRole = () =>
        this.page.getByRole('link', { name: 'Hire a Developer' });

    hireDeveloperText = () =>
        this.page.getByText('Hire a Developer');

    hireDeveloperCss = () =>
    this.page.locator('a[href*="hire"]');

    hireDeveloperXpath = () =>
        this.page.locator("//span[contains(text(),'Hire a Developer')]");


cloudSolutionsRole = () =>
 this.page.getByRole('link', { name: 'Cloud Solutions' });

cloudSolutionsText= () =>
    this.page.getByText('Cloud Solutions');

cloudSolutionsCss = () =>
    this.page.locator('a[href*="cloud-solutions"]');

cloudSolutionsXpath = () =>
    this.page.locator("//span[contains(text(),'Cloud Solutions')]");
}
