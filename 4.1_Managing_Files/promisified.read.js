const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

// turn variable readFile to a function readFile() which will promisify the argument
const readFile = promisify(fs.readFile);

// readFile('./data/pulitzer-circulation-data.csv', 'utf8')
//     .then(data => console.table(convertCsv(data)))
//     .catch(err => console.log(`File error: ${err}`))

const read = async () => {
    // readFile has 2 arguments since it is assigned to the function promisify()
    const data = await readFile('./data/pulitzer-circulation-data.csv', 'utf8')
    console.table(convertCsv(data));
}

read()