const http = require('http');

// server is a higher order function because it is a function that also has another function
  // req -> request
  //  res -> response

// Normal way to do it
  // const server = http.createServer((req, res) => {
  //   res.end('Hello World\n');
  // });

// Let's break them down
const requestListener = (req, res) => {
  
  // req and res -> both are streams!

  //req
    // console.log(req) // this will show everything that req argument has, but it may be difficult to read, so as an alternative, you may instead type:
    console.dir(req, { depth:0 }); // this tells the console to print only the first level of properties, and not the nested objects for this object -> this object will be of type IncomingMessage{}
    console.log(req.url) // this will show why there are 2 instances of IncomingMessage when console.dir function is invoked; since the req.url looks for both "/" and "/favicon.ico"
    res.end('Hello again Nodemon!!\n'); // this .end method indicates that the communication is over

  // res
    console.dir(res, {depth:0}) // this res object will be of type ServerResponse{} (compared to req which is IncomingMessage{})

}

const server = http.createServer()

// req and res are both event emmiters, in such a way that we can actually type
server.on('request', requestListener); // this looks for the request to create a server, then after which, the function requestListener will be invoked as a response

server.listen(4242, () => {
  console.log('Server is running...');
});
// .listen() method has 2 arguements: 1st to determine the port where the server will run, and 2nd, to give a signal to say that the server has successfully ran

// check localhost:4200 to see "Hello World"
