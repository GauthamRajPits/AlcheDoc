import {test, expect} from '@playwright/test'
import { Homepage } from '../page-objects/homePage'
import testData from '../test-data/testData.json';

test.describe('Alchedoc Login page Tests',()=>
{
    test('Should verify the homepage URL is correct',async({page})=>
    {
        const homePage = new Homepage(page);
        await homePage.navigate();
        const currentTitle = await homePage.getPageTitle();
        expect(currentTitle).toBe(testData.testCases.titleCheck);
    })

    test('CheckingLogin functionality',async({page})=>
    {
        const homePage = new Homepage(page);
        await homePage.navigate();
        await homePage.login(testData.testCases.emailForLogin,testData.testCases.passwordForLogin) 
        const currentTitle = await homePage.getPageTitle();
        expect(currentTitle).toBe(testData.testCases.DashBoardTitle);
        
    })
})