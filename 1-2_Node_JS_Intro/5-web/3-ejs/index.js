const express = require('express');

const server = express();

// do this in order to configure this node application to ejs
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index'); //.render() is used instead of .send()
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
