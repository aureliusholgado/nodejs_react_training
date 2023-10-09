// By default, node modules are as functions; this is called the WRAPPING FUNCTION

// function (module, exports, require, __fileName, __dirName) {
    
    // console.log(arguments); // arguments here are all the arguments listen above; these are the default arguments when running a node module
    
    // exports is just an alias for module.exports; they are in essence, the same, therefore these next 2 lines of code will just make 1 object name module.exports with key-value pairs accordingly
    exports.a = 42;
    module.exports.b = 37;
    
    // Using functions
        // exports = () => {} -> this is NOT ok since exports is just an alias; it is not module.exports itself, but it is just an ASSIGNMENT REFERENCE
        // module.exports = () => {} -> this one will work since module.exports is the one that is being returned  by default

    // by default, there is a return:
    // return module.exports
        // module is the module argument itself
        // module.exports is used to define the api of this module

// }
