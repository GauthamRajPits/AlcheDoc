import {Locator, Page} from '@playwright/test'

export class Homepage
{
    readonly page : Page;

    //Locators
    readonly emailField : Locator;
    readonly passwordField : Locator;
    readonly loginButton : Locator;
    

    constructor(page : Page)
    {
        this.page = page;
        this.emailField = page.getByPlaceholder("Enter your email");
        this.passwordField = page.getByPlaceholder("Enter your password");
        this.loginButton = page.getByRole('button',{name: 'Login'});
    }
    /////////////////////
    async navigate() 
    {
        await this.page.goto('/login');
        await this.page.waitForLoadState('networkidle');
    }

    async getPageTitle()
    {
        return await this.page.title();
    }

    async login(email,password)
    {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(5000);
    }
}