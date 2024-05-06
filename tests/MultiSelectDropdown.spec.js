const {test, expect} = require('@playwright/test')

test ('Multiselect Dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.selectOption('#colors', ['Red', 'Blue', 'Yellow'])

    //const options = await page.locator('#colors option')
    //await expect(options).toHaveCount(5)

    //const options = await page.$$('#colors option')
    //await expect(options).toHaveLength(5)
    //console.log('Number of options:', options.length)
    //await expect(options.length).toBe(5)

    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Black')).toBeFalsy()
    await expect(content.includes('Yellow')).toBeTruthy()



    //await page.waitForTimeout(5000)




})