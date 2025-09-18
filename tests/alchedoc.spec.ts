import {test, expect} from '@playwright/test'
import { Login } from '../page-objects/Login'
import testData from '../test-data/testData.json';

test.describe('Alchedoc Login page Tests',()=>
{
    test('Should verify the homepage URL is correct',async({page})=>
    {
        const loginPage = new Login(page);
        await loginPage.navigate();
        const currentTitle = await loginPage.getPageTitle();
        expect(currentTitle).toBe(testData.testCases.titleCheck);
    })

    test('Checking Login functionality',async({page})=>
    {
        const loginPage = new Login(page);
        await loginPage.navigate();
        await loginPage.login(testData.testCases.emailForLogin,testData.testCases.passwordForLogin) 
        const currentTitle = await loginPage.getPageTitle();
        expect(currentTitle).toBe(testData.testCases.DashBoardTitle);
    })

    test('Show password is working',async({page})=>
    {
        const loginPage = new Login(page);
        await loginPage.navigate();
        const expectedPassword = await loginPage.showPassword(testData.testCases.passwordForLogin);
        expect(testData.testCases.passwordForLogin).toBe(expectedPassword);
        
    })

    test('Checking Dashboard displayed',async({page})=>
    {
        const loginPage = new Login(page);
        await loginPage.navigate();
        await loginPage.login(testData.testCases.emailForLogin,testData.testCases.passwordForLogin) 
    })
})