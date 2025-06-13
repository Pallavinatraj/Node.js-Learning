const http = require ("http");
const server = http.createServer((req, res)=>{
 
   const url = res.url;

   if(url ==="/"){
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Home Page");

   }
   else if(url ==="/projecs"){
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Project Page");

   }
   else{
    res.writeHead(404, {"content-type": "text/plain"});
    res.end("Home Page is not Found!");
   }

})

server.listen(3000, ()=>{
  console.log("Server is start to listin");
});
