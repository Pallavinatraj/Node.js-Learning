const express = require("express");
const app = express();

const path = require("path");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const products= [{
  id:1,
  title:'Product 1'
},
{
  id:2,
  title:'Product 2'
},
{
  id:3,
  title:'Product 3'
}]

app.get("/", (req, res)=>{
  res.render("home", {title:"Home", products:products});
})

app.get("/about", (req, res)=>{
  res.render("about", {title:"About", products:products});
});

app.listen(3000, ()=>{
  console.log('Listening....');
  
});



