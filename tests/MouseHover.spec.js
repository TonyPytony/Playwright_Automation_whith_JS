const {test, expect} = require('@playwright/test')


test('Mouse hover', async ({page})=>{

    await page.goto('https://demo.opencart.ua/')

    const desktops = await page.locator("(//li[@class='dropdown'])[2]")
    const macbook = await page.locator("//a[normalize-space()='Mac (1)']")

    await desktops.hover()
    await macbook.hover()

    await page.waitForTimeout(5000)

})