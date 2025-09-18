import {Locator, Page} from '@playwright/test'

export class Login
{
    readonly page : Page;

    //Locators
    readonly emailField : Locator;
    readonly passwordField : Locator;
    readonly loginButton : Locator;
    readonly forgotPasswordLink : Locator;
    readonly showPasswordIcon : Locator;
    

    constructor(page : Page)
    {
        this.page = page;
        this.emailField = page.getByPlaceholder("Enter your email");
        this.passwordField = page.getByPlaceholder("Enter your password");
        this.loginButton = page.getByRole('button',{name: 'Login'});
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot password?' });
        this.showPasswordIcon = page.locator('form').getByRole('img');
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

    async showPassword(password)
    {
        await this.passwordField.fill(password);
        await this.showPasswordIcon.click();
        //await this.page.waitForTimeout(2000);
        const passwordText =  await this.passwordField.inputValue();
        //await this.page.waitForTimeout(2000);
        return passwordText;
    }
}