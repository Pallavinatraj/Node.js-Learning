const express = require('express');
const app = express();

//For Routing 
app.get("/about", (req, res)=>{
    res.send("Hello World");
})

//Create Server
const port = 3000;
app.listen(port, ()=>{
  console.log(`Server listen the particular port of ${port}`);
});
