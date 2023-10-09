// by default, require('../frame-print') should be the syntax, however, we can publish our own the frame-print package in order to install it directly

// to install a package, creat an account in npmjs.com and use 'npm login' to login in the terminal

// 'npm init' on the package that you want to publish then you can set up the credentials of the package there

// rename the packageName to username-packageName

// 'npm publish' to officially publish the package

// check for successful publishing by checking https://npmjs.com/package/username-packageName

// now, we that the package is published, it can now be installed normally with 'npm i username-packageName' in the local folder of where you want to use that dependency

// after which, require(username-packagename)
const print = require('aurelius.holgado-frame-print')

// this print is the function from frame-print dependency which was assigned to the local variable here 'print'
print("Hello NPM!")