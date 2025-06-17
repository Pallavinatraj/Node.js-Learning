const express = require('express');
const app = express();

//Middleware 
app.use(express.json());

//get root --
app.get('/', (req, res)=>{
  res.json("Welcome to Home Page Guys.....");
});

//Books Details ---
const books = [{
   id:1,
   product: 'Book 1'
},
{
   id:2,
   product: 'Book 2'
},
{
   id:3,
   product: 'Book 3'
},
{
   id:4,
   product: 'Book 4'
}]


//get root for all books
app.get('/get' , (req, res)=>{
  res.json(books);
});

//get root for One books
app.get('/get/:id' , (req, res)=>{
   const singleBook = books.find(book=>book.id === parseInt(req.params.id));
   if(singleBook){
    res.status(200).json(singleBook);
   }
   else{
    res.status(400).json({
      message:'the given id Book is not available! Please try again'
   })
}});


//POST books ---
app.post('/add' , (req, res)=>{
  const newBook= {
    id:books.length+1,
    product:`Book ${books.length+1}`
  }

  books.push(newBook);

  res.status(200).json({
    data:newBook,
    message:"Newbook succefully Added"
  });

  });

  //PUT books ---
app.put('/update/:id' , (req, res)=>{
 const findBook= books.find(book=> book.id===parseInt(req.params.id));
 
  if(findBook){
    findBook.product= req.body.product || findBook.product;
    res.status(200).json({
      message:`The given Id Book  title is ${findBook.product} Updated`,
      data: findBook
    })
  }
  else{
    res.status(404).json({
      message:'The given Book id is not available please find another one'
    })
  }});

  //DELETE books ---
app.delete('/delete/:id' , (req, res)=>{
 const findBook= books.findIndex(book=> book.id===parseInt(req.params.id));
 
  if(findBook !== -1){
    const deletedBook = books.splice(findBook, 1);
    res.status(200).json({
      message:`The given Id Book is Deleted`,
      data: deletedBook[0]
    })
  }
  else{
    res.status(404).json({
      message:'The given Book id is not available please find another one'
    })
  }});


//PORT 
const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server start to running on Port ${PORT} `)
});




