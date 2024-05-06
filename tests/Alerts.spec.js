const {test, expect} = require('@playwright/test')

test.skip('Alert with OK', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click("//button[normalize-space()='Alert']")
    await page.waitForTimeout(5000)


})

test.skip('Confirmation alert with OK and Cancel', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
        //await dialog.dismiss()
    })

    await page.click("//button[normalize-space()='Confirm Box']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)


})

test('Prompt alert', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Tony')
        //await dialog.dismiss()
    })

    await page.click("//button[normalize-space()='Prompt']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Tony! How are you today?')
    await page.waitForTimeout(5000)


})