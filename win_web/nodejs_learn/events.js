// something that has happened listen to it
// EvenEmitter is a class
const EventEmitter=require('events');

// creates an instance
// const emitter = new EventEmitter();

// Listener will be called when message event is raised
// emitter.on('message',(arg)=>{
//     console.log('Listener Called',arg);
// });

// raise a event message
// order is important ,register the listener before the event ,because emit method 
// iterates over all the registered listeners async
// emitter.emit('message',{id:1,url: "http://"});

const Logger =require('./logger');
const logger=new Logger();


// same as addListener
logger.on('message',(arg)=>{
    console.log('Listener Called',arg);
});

logger.log('Hello');
