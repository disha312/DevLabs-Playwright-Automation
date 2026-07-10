
export class DevLabsHomePage {

    constructor(page) {
        this.page = page;
    }

    // Navigation Menu
    servicesMenu = () =>
        this.page.getByRole('link', { name: 'Services ' });

    aboutUsLink = () =>
        this.page.getByRole('link', { name: 'About Us' }).first();

    hireDeveloperLink = () =>
        this.page.getByRole('link', { name: 'Hire a Developer' }).first();

    // Service Links
    cloudSolutionsLink = () =>
        this.page.getByRole('link', { name: 'Cloud Solutions' });

    softwareDevelopmentLink = () =>
        this.page.getByRole('link', { name: 'Software Development' }).first();

    websiteDevelopmentLink = () =>
        this.page.getByRole('link', { name: 'Website Development' });

    mobileApplicationsLink = () =>
        this.page.getByRole('link', { name: 'Mobile Applications' });

    uiUxDesigningLink = () =>
        this.page.getByRole('link', { name: 'UI/UX Designing' });

    productDevelopmentLink = () =>
        this.page.getByRole('link', { name: 'Product Development' });

    // Headings
    servicesHeading = () =>
        this.page.getByRole('heading', { name: 'Services', exact: true });

    cloudSolutionsHeading = () =>
        this.page.getByRole('heading', { name: 'Cloud Solutions', exact: true });

    softwareDevelopmentHeading = () =>
        this.page.getByRole('heading', { name: 'Software Development', exact: true });

    websiteDevelopmentHeading = () =>
        this.page.getByRole('heading', {
            name: 'Website Development',
            exact: true
        });

    mobileApplicationsHeading = () =>
        this.page.getByRole('heading', {
            name: 'Mobile Applications',
            exact: true
        });

    uiUxDesignHeading = () =>
        this.page.getByRole('heading', {
            name: 'UI/UX Design Services',
            exact: true
        });

    productDevelopmentHeading = () =>
        this.page.getByRole('heading', {
            name: 'Product Development',
            exact: true
        });

    businessConsultingHeading = () =>
        this.page.getByRole('heading', {
            name: 'Business Consulting',
            exact: true
        });

    salesforceServiceAndSolutionsHeading = () =>
        this.page.getByRole('heading', {
            name: 'Salesforce Service and Solutions',
            exact: true
        });

    digitalTransformationHeading = () =>
        this.page.getByRole('heading',{
            name: 'Digital Transformation',
            exact: true
        }).first();

    dataScienceHeading = () =>
        this.page.getByRole('heading',{
            name: 'Data Science',
            exact: true
        }).first();

    dataEngineeringHeading = () =>
        this.page.getByRole('heading',{
            name: 'Data Engineering',
            exact: true
        }).first();

    staffAugmentationHeading = () =>
        this.page.getByRole('heading',{
            name: 'Staff Augmentation',
            exact: true
        }).first();
    talkToOurExpertsButton = () =>
    this.page.getByRole('link', {
        name: /Talk To Our Experts/i
    });

    contactHeading = () =>
    this.page.getByRole('heading', {
        name: 'Contact',
        exact: true
    });

    letsConnectHeading = () =>
    this.page.getByRole('heading', {
        name: /Let's Connect/i
    });
    contactNameField = () =>
    this.page.getByRole('textbox', {
        name: 'Your Name*'
    });

    contactEmailField = () =>
    this.page.getByRole('textbox', {
        name: 'Your Email*'
    });

    contactAddressField = () =>
    this.page.getByRole('textbox', {
        name: 'Your Address'
    });

    contactMessageField = () =>
    this.page.getByRole('textbox', {
        name: 'Write your Message'
    });

    submitNowButton = () =>
    this.page.getByRole('button', {
        name: 'Submit Now'
    });

    successMessage = () =>
    this.page.locator('.wpcf7-response-output');

    //emailValidationMessage = () =>
    //this.page.getByText('Please enter an email address.');

    validationMessage = () =>
    this.page.locator('.wpcf7-not-valid-tip').first();
}
