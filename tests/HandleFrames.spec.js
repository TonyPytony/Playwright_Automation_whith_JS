const {test, expect} = require('@playwright/test')

test('Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const allFrames = await page.frames()
    console.log(allFrames.length)

    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill("[name='mytext1']",'Hello!')

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputBox.fill('Hello!')

    await page.waitForTimeout(5000)


})