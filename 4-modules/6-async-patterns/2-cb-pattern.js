const fs = require('fs');

// Example of an ASYNCHRONOUS node function

// CALLBACK FUNCTION: This function will be displayed after the 'TEST' since it will go through 2 iterations: 1st, it will look for the filename, then 2nd, it will read the actual file
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
