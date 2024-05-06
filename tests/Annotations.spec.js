const {test, expect} = require('@playwright/test')

test('Test1 @sanity', async ({page, browserName}) =>{

    if(browserName==='firefox')
    {
        test.fail()
    }
    console.log('This is my test 1...')

})

test('Test2 @sanity', async ({page}) =>{

    console.log('This is my test 2...')

})

test('Test3 @reg', async ({page}) =>{

    test.fixme()
    console.log('This is my test 3...')

})

test('Test4 @reg', async ({page, browserName}) =>{

    console.log('This is my test 4...')
    if(browserName==='chromium')
    {
        test.skip()
    }

})

test('Test5 @reg @sanity', async ({page}) =>{

    test.fail()
    console.log('This is my test 5...')
    expect(1).toBe(2)

})

test('Test6 @sanity', async ({page}) =>{

    //test.slow()
    test.setTimeout(3000)
    console.log('This is my test 6...')
    await page.goto('https://www.demoblaze.com/index.html')

})

test('Test7 @sanity', async ({page}) =>{

    console.log('This is my test 7...')

})