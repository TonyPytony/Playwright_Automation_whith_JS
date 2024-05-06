const {test, expect} = require('@playwright/test')

test('Checkboxes', async({page})=>{

    await page.goto('https://planetakino.ua/showtimes/#today')

    await page.locator("(//div[@class='mat-checkbox-inner-container'])[3]").check()
    //await page.check("(//div[@class='mat-checkbox-inner-container'])[3]")

    await page.waitForTimeout(3000)

    await expect(await page.locator("(//div[@class='mat-checkbox-inner-container'])[3]")).toBeChecked()
    await expect(await page.locator("(//div[@class='mat-checkbox-inner-container'])[3]").isChecked()).toBeTruthy()
    await expect(await page.locator("(//div[@class='mat-checkbox-inner-container'])[1]").isChecked()).toBeFalsy()

    const checkboxLocators=[
        "(//div[@class='mat-checkbox-inner-container'])[3]",
        "(//div[@class='mat-checkbox-inner-container'])[1]",
        "(//div[@class='mat-checkbox-inner-container'])[4]"
    ]

    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check()
    }

    await page.waitForTimeout(3000)

    for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck()
    }
    }

    await page.waitForTimeout(3000)


})