const EventEmitter=require("events");
//console.log(events);
const emitter=new EventEmitter();

emitter.emit("Done");//raise event

emitter.on("Done",()=>{
    console.log("Event Done Called");
});//listen event


emitter.emit("Done");//raise event


