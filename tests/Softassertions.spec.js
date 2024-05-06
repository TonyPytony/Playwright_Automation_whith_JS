const {test, expect} = require('@playwright/test')

test('Soft assertions', async ({page})=> {

    await page.goto('https://exe.ua/ua/')

    await expect.soft(page).toHaveTitle("1нтернет-магазин exe.ua: сервери, серверне, промислове обладнання, комп'ютери, комплектуючі, ноутбуки, послуги | Опт, роздріб, ПДВ, ТОВ")

    await expect(page).toHaveURL('https://exe.ua/ua/')

    const logoElement = await page.locator('.col.col-md-3.col-sm-4.col-xs-4.h_logo')
    await expect(logoElement).toBeVisible()


})