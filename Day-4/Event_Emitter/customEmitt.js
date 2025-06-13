const eventEmitter = require("events");



class MyCustomEmitter extends eventEmitter {
  constructor() {
    super(); //calls a parent emitter

    this.greeting = 'Hello';
  }
  greet(name){
    this.emit("greeting", `${this.greeting} ${name} `);
  }
}

const myCustomEmitter = new MyCustomEmitter();
myCustomEmitter.on('greeting', (input)=>{
  console.log(`Greeting event:`, input)
})

 myCustomEmitter.greet("Pallavi")