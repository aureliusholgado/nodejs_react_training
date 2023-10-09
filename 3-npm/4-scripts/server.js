// npm install first to install all dependencies needed
// scripts that you define in package.json are basically commands that you can run using 'npm run script-name'
// 'npm help npm-scripts' to see all script names and what they do
// 'npx packageName' can be used to run a package that is globally installed,  and not within the local package.json file (npx = node package eXecute)

const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.listen(8000, () => {
  console.log('Server is running...');
});
