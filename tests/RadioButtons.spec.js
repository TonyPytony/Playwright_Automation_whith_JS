const {test, expext, expect} = require('@playwright/test')

test('Radio Buttons', async ({page})=>{

await page.goto('https://planetakino.ua/showtimes/#today')

await page.locator("//label[@for='mat-radio-3-input']//div[@class='mat-radio-outer-circle']").check()
//await page.check("//label[@for='mat-radio-3-input']//div[@class='mat-radio-outer-circle']")

await page.waitForTimeout(5000)

await expect(await page.locator("//label[@for='mat-radio-3-input']//div[@class='mat-radio-outer-circle']")).toBeChecked()
await expect(await page.locator("//label[@for='mat-radio-3-input']//div[@class='mat-radio-outer-circle']").isChecked()).toBeTruthy()

await expect(page).toHaveURL('https://planetakino.ua/showtimes/#tomorrow')

await expect(await page.locator("//label[@for='mat-radio-2-input']//div[@class='mat-radio-outer-circle']").isChecked()).toBeFalsy()

await expect(await page.locator("//label[@for='mat-radio-4-input']//div[@class='mat-radio-outer-circle']").isChecked()).toBeFalsy()

await expect(await page.locator("//label[@for='mat-radio-5-input']//div[@class='mat-radio-outer-circle']").isChecked()).toBeFalsy()


await page.waitForTimeout(5000)



})