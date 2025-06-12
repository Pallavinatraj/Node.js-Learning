 //Simple node.js Server
const http = require('http')



const server = http.createServer((req, res)=>{
    console.log(req);
});

let PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`The http://localhost/${PORT}`);
});
