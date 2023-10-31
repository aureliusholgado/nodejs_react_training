function *generatorFunction(){
    
    let x = 5 // x1 || value of x in the 1st iterator.next()
    yield x // yieldx1 || value of x in the 2nd & 3rd iterator.next(); this is where the value of x is taken/resumes when the next iterator.next() function is invoked
    x++ 
    
    let y = yield x // yieldx2 || value of y considered in the last iterator.next(arg)
    return x + y // yieldx1 + yieldx2 -> note that y = null during the first 2x iterator.next() is invoked

}

let iterator = generatorFunction() // starts the generatorFunction

console.log(iterator.next()) // 1st execution of the generatorFunction; this will not take into consideration any of the 'yield x'
console.log(iterator.next()) // 2nd execution of the generatorFunction; resumes from the 1st yield x and continues to run until it finds the 1st 'yield x'
console.log(iterator.next(4)) // 3rd execution of the generatorFunction; the argument here will be passed on to the 2nd 'yield x', which is then stored to the variable y
console.log("All done")