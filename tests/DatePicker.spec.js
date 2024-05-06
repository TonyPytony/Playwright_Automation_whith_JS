const {test, expect} = require('@playwright/test')


test('Date Picker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.fill('#datepicker', '02/26/1995')

    const year = '2022'
    const month = 'June'
    const date = '17'

    await page.click('#datepicker')

    while(true)
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth == month)
        {
            break
        }

        //await page.locator('[title="Next"]').click()
        await page.locator('[title="Prev"]').click()
    }

    const allDates = await page.$$('.ui-state-default')

    /*for(const dt of allDates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click()
            break
        }
    }
    */

    await page.click(`//a[normalize-space()='${date}']`)

    await expect(await page.locator('#datepicker')).toHaveValue('06/17/2022')

    await page.waitForTimeout(5000)



})