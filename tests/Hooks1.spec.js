const {test, expect} = require('@playwright/test')

test('Home Page Test', async ({page}) =>{

    await page.goto('https://www.demoblaze.com/index.html')
    
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    const products = await page.$$('.hrefch')
    await expect(products).toHaveLength(9)

    await page.locator('#logout2').click()

})


test('Add Product to cart Test', async ({page}) =>{

    await page.goto('https://www.demoblaze.com/index.html')
    
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })


    await page.locator('#logout2').click()
    
})