const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// This makes use of the nested callback function efficiently by using promises (review async-await)
async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
