const {test, expect} = require('@playwright/test')

test('Test1', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')
})

test('Test2', async ({page})=>{
    await page.goto('https://demo.opencart.ua/')
    await expect(page).toHaveTitle('Демо магазин OpenCart')
})

test('Test3', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
})