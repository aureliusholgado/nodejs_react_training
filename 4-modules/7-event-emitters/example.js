const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Streams are Event Emitters
// process.stdin, process.stdout

// myEmitter.emit('TEST_EVENT') -> this emits all the events with name "TEST_EVENT"

// SCENARIO 1: This one will not emit anything since the invocation of the event was done before any event was made
// myEmitter.emit('TEST_EVENT')

// myEmitter.on('TEST_EVENT', () => {
//     console.log('TEST_EVENT was fired')
// })

// myEmitter.on('TEST_EVENT', () => {
//     console.log('TEST_EVENT was fired')
// })

// SCENARIO 2: Opposite of scenario 1; this one will show the events since they themselves were emmitted after they were invoked
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired')
})

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired')
})

myEmitter.emit('TEST_EVENT')

// SCENARIO 3: setImmediate() will loop through all the myEmitter.on(s) in the file before invoking myEmitter.emit
setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
})

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})