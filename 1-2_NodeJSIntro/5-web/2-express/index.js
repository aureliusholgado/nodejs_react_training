// Express.js is a framework for us to do the http createServer methods 

const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send("Hello Express")
})

server.get('/about', (req, res) => {
  res.send("About")
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
