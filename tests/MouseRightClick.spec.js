const {test, expect} = require('@playwright/test')


test('Mouse Right Click', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const rightClickBtn = await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //await page.click(rightClickBtn)
    await rightClickBtn.click({button: 'right'})

    await page.waitForTimeout(5000)
    
})