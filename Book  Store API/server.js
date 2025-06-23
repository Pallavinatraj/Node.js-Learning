const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const database = require('./database/db')
const bookrouter = require('./routes/book_routes')

const PORT = process.env.PORT || 3000;


//Connect to Database 
database();

//Middleware 
app.use(express.json());

//router here
app.use('api/book/', bookrouter)





app.listen(PORT, ()=>{
  console.log('Server is running on port 3000 ');
})