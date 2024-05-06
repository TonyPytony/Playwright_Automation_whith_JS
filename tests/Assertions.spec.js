const {test, expect} = require('@playwright/test')

test('AssertionsTest', async ({page}) =>{

    await page.goto('https://exe.ua/ua/')
    await expect(page).toHaveURL('https://exe.ua/ua/')

    await expect(page).toHaveTitle("Інтернет-магазин exe.ua: сервери, серверне, промислове обладнання, комп'ютери, комплектуючі, ноутбуки, послуги | Опт, роздріб, ПДВ, ТОВ")
    
    const logoElement = await page.locator('.col.col-md-3.col-sm-4.col-xs-4.h_logo')
    await expect(logoElement).toBeVisible()

    const search = await page.locator("//input[@id='search_query']")
    await expect(search).toBeEnabled()

    await page.getByRole('link', { name: ' Комплектуючі для ПК ' }).click();
    await page.getByRole('link', { name: 'Відеокарти' }).click();
    const nVidiaCheckBox = await page.locator("input[value='1279']")
    await nVidiaCheckBox.click()
    await expect(nVidiaCheckBox).toBeChecked()

    const basket = await page.locator('#cart')
    await expect(basket).toHaveAttribute('class',' empty')

    await expect(await page.locator('.category-name')).toHaveText('Відеокарти')

    await expect(await page.locator('.category-name')).toContainText('Від')

    const minPrice = await page.locator("//input[@placeholder='1326']")
    await minPrice.fill('7777')
    await expect(minPrice).toHaveValue('7777')

    const bitRate = await page.locator('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) label')
    await expect(bitRate).toHaveCount(10)

})