const templateGenerator = require('./4-function');

// since the value of templateGenerator is a function, we can pass an argument to it
const myTemplate = templateGenerator('Hello Node!');

console.log(myTemplate);
