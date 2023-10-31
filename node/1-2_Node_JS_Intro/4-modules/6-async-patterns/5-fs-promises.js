const { readFile } = require('fs').promises;

// Promises are better than callbacks because it allows nesting and looping
async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
