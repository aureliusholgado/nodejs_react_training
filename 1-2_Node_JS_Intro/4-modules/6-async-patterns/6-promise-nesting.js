const fs = require('fs').promises;

// await is basically the callback function per se
async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  // More awaits here...
}

main();
console.log('TEST');
