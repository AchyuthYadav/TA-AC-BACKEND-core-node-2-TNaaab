var {EventEmitter} = require('event');

var myEmitter = new EventEmitter();

myEmitter.on('notice',() => {
    console.log('event emiited')
})

myEmitter.emit('notice' , "hello world") 