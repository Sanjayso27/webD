const EventEmitter=require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('message',{id:1,url: "http://"});
    }
}

module.exports = Logger;