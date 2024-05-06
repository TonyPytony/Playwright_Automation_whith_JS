const {test, expect} = require('@playwright/test')


test('Mouse Double Click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']")

    await btnCopy.dblclick()

    await expect(page.locator("(//input[@id='field2'])[1]")).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)
    
})