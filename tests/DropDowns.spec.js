const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('Dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.locator('#country').selectOption({label:'United States'})
    //await page.locator('#country').selectOption('United States')
    //await page.locator('#country').selectOption({value:'usa'})
    //await page.locator('#country').selectOption({index: 0})
    //await page.selectOption('#country', 'United States')

    //const options = await page.locator('#country option')
    //await expect(options).toHaveCount(10)

    //const options = await page.$$('#country option')

    //console.log('Number of options:', options.length)
    //await expect(options.length).toBe(10)

    //const content = await page.locator('#country').textContent()
    //await expect(content.includes('United States')).toBeTruthy()

    /*const options = await page.$$('#country option')
    let status = false
    for(const option of options)
    {
        //console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('France'))
        {
            status=true
            break
        }
    }
    await expect(status).toBeTruthy()*/

    const options = await page.$$('#country option')
    for(const option of options)
    {
        let value = await option.textContent()
        if(value.includes('France'))
        {
            await page.selectOption('#country', value)
            break
        }
    }

    await page.waitForTimeout(5000)


})