// This requires node's built-in http module, which is then accessed in the variable http

// const http = require('http'); -> this is not the ecmascript version to require a module -> in order to access createServer() function, the syntax is http.createServer()
// import { http } from 'http' // this now is the way to use ecmascript (import variableName from 'modulePath')
import { createServer } from 'http'; // importing the methods directly can also work -> this will no longer require the use of http.createServer; pwede nang diretso createServer()

// This uses this createServer() method of the built-in http module which triggers a function with 2 parameters: request and response in order to CREATE
// res.end is the response that will show once the server is ACTIVATED
// The created server is now stored as the value for the variable server
const server = createServer((req, res) => {
  res.end('Hello World :)\n');
});

// the .listen() method ACTIVATES the created server in the port 4242; a function to console.log the given message is invoked as the server is activated in order to show successful activation
server.listen(4242, () => {
  console.log('Server is running...');
});
