//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')
    //await page.type('#loginusername')

    await page.fill("input[id='loginpassword']", 'test@123')

    await page.click("(//button[normalize-space()='Log in'])[1]")

    const logOutLink = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logOutLink).toBeVisible()

    await page.close()

})