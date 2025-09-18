// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// const log=()=>{
//     console.log("Log Function Called");
//     emitter.emit("LogDone");

// }
// module.exports.log=log;
// module.exports.emitter=emitter;


//2 Object, Inherit
const EventEmitter=require("events");
class Logger extends EventEmitter
{
    log(){
        console.log("Log Function Called");
        this.emit( "LogDone" );

    }
}
module.exports=new Logger();
