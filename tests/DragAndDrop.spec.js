const {test, expect} = require('@playwright/test')


test('Drag and drop', async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome = await page.locator('#box6')
    const washington = await page.locator('#box3')
    const italy = await page.locator('#box106')
    const usa = await page.locator('#box103')


    /*await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()
    */

    await rome.dragTo(italy)
    await washington.dragTo(usa)

    await page.waitForTimeout(5000)
    
})