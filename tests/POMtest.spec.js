const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

test('test', async ({page})=>{

    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol','test@123')
    await page.waitForTimeout(3000)


    const homePage = new HomePage(page)
    await homePage.addProductToCart('Samsung galaxy s7')
    await homePage.gotoCart()
    await page.waitForTimeout(3000)


    const cartPage = new CartPage(page)
    await page.waitForTimeout(3000)
    const status =  await cartPage.checkProductInCart('Samsung galaxy s7')
    expect(await status).toBe(true)

})