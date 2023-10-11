const fs = require('fs');

const data = fs.readFileSync(__filename);

// This entire file is an example of a SYNCHRONOUS node function

// This will be displayed first since it is consoled first
console.log('File data is', data);

console.log('TEST');
