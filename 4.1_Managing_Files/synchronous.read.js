const { convertCsv } = require('./csv.parse')
const { readFileSync } = require('fs');

// Difference is that readFile() has 3 arguments, whereas readFileSync only has 2
// Note that synchronous code is blocking, meaning that if other codes are running, this may just stay blocked 
try{
    const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");
    console.table(convertCsv(data))
}catch(err){
    console.log(`Error with file: ${err}`)
}