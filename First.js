//What is Node js ?
//ANS: 
// 1] Node js is javascript runtime , built on googles open sourse VS engine
// 2] Node.js is single threaded , even driven and Non - Blocking
//3] Perfect for building fast and scalable data intensive application 
//4] Huge library of open source package are available (Npm)
  
//Node Innstallation 

//Understanding REPL - It is Node.js envirnament to run the JS code 
//Read - Evalue - Print - Loop

//Input and Output from terminal 
const readline = require('readline');
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter Your Name : " , (name)=>{
    console.log("Entered name: "+name);
    rl.close();
})

rl.on('close', ()=>{
    console.log("interface ended");
    process.exit(0);
})