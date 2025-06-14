const express = require("express");
const app = express();

app.use(logger); //It must Global declaration

app.get("/", (req, res)=>{
  res.send("Home Page");
})

app.get("/userpage", auth, (req, res)=>{
  console.log("User page")
  res.send("User Page");
  // next();
})

app.listen(3000, (req, res)=>{
  
  console.log("Listen")
});

function logger(req, res, next){
  console.log("log");
  next();
}

function auth(req, res, next){
  console.log("auth");
 next();
}




