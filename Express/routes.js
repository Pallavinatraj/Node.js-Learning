const express = require("express");
const app = express();

app.get('/', (req, res)=>{
  res.send("Hello getting greetings from Server ");
});

//GET all Products
app.get("/products", (req, res)=>{
  const products = [
    {
      id:1,
      label: "item1"
    },
   {
      id:2,
      label: "item2"
    },
    {
      id:3,
      label: "item3"
    },
  ]
  res.json(products);
})

//GET a Single Product
app.get("/products/:id", (req , res)=>{
   const userId = parseInt(req.params.id);
   
   const products = [
    {
      id:1,
      label: "item1"
    },
   {
      id:2,
      label: "item2"
    },
    {
      id:3,
      label: "item3"
    },
  ]

  const singleId = products.find(product=> product.id===userId);
  if(singleId){
    res.json(singleId);
  }else{
    res.status(404).send("the given request of product is NOT available! Plaese try another one !");
  }

})

const port = 3000;
app.listen(port, ()=>{
  console.log("port is listening");
})