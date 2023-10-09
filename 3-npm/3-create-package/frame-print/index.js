// console.log('Testing...')

// module.exports is used in order to allow this file to be exportable
// by default, if we are exporting a top-level export, we have to be exporting a FUNCTION
module.exports = function print (msg) {
    console.log('**********')
    console.log(msg)
    console.log('**********')
}