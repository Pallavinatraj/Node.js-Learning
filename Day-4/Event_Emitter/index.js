const eventEmitter = require("events");

const myFirstEmitter = new eventEmitter();


myFirstEmitter.on("started", (name)=>{
  console.log(`Hello my name is ${name}`);
})

myFirstEmitter.emit("started", "Pallavi");