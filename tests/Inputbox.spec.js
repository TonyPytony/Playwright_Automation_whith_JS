const {test, expect} = require('@playwright/test')

test('Input Box', async ({page})=> {

    await page.goto('https://exe.ua/signup/')

    await expect(await page.locator("(//input[@title='Имя'])[1]")).toBeVisible()
    await expect(await page.locator("(//input[@title='Имя'])[1]")).toBeEmpty()
    await expect(await page.locator("(//input[@title='Имя'])[1]")).toBeEditable()
    await expect(await page.locator("(//input[@title='Имя'])[1]")).toBeEnabled()

    await page.locator("(//input[@title='Имя'])[1]").fill('Tony')
    //await page.fill("(//input[@title='Имя'])[1]", 'Tony')

    await page.waitForTimeout(5000) //pause 5 sec

})