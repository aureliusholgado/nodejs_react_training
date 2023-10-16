// jest does not need to be required, since it is automatically installed globally once installed
const math = require('./math')

// test() has 2 arguments, the name of the test(1), and the callback function
// set 'test' in package.json to 'jest' in order to use this testing module, then use it with npm test
    // 'jest --watch' will run like nodemon with options on what kinds of test to run

// make sure your file name is fileName.test.js
    test("CheckTip", ()=>{
        let total = math(1, 0.3)

        // jest has 2 methods we can use instead of using the entire conditional statement below: expect() and toBe()
        // check link for documentation of other available methods: https://jestjs.io/docs/en/expect
        expect(total).toBe(1.3);

        // if(total !== 1.3){
        //     console.log(total)
        //     throw new Error(`Total should be 1.3, but is ${total} instead`);
        // }else{
        //     console.log('Total is 1.3!')
        // }
    })

// Failed Test
    // test('Failed Test', (done)=>{
    //     // "done" is an argument in test's callback function that can be invoked to signify when you want the test process to be done; if this is not present, this function will pass because it will just continue
    //     setTimeout(()=>{
    //         expect(1).toBe(2);
    //         done()
    //     }, 2000)

    // })

// test with promises
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (a < 0 || b < 0){
                reject(new Error("Numbers should be positive"))
            }else{
                resolve(a+b);
            }
        }, 2000)
    })
}

test("Add Promise", async () => {
    let sum = await add(3,2)
    expect(sum).toBe(5)
})