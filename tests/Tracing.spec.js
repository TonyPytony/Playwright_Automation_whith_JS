import {test, expect} from '@playwright/test'

test('Record video', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
    await expect(page.locator('#log54545out2')).toBeVisible()

})