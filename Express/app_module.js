const express = require ("express");
const app = express();

app.get("/" , (res, req)=>{
  res.send("GET the data from server");
});

app.post("/posts", (req, res)=>{
  res.json({
    message:'Data recieved',
    data:req.body
  })
})