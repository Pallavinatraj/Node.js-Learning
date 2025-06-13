const http = require("http");
const server = http.createServer((req, res)=>{
  console.log("req:", req);
  res.writeHead(200, {"content-type": "text/plane"})
  res.end("Hello from Server");
  

})

server.listen(3000, ()=>{
  console.log(`Server is now Listening t port ${3000}`);
})