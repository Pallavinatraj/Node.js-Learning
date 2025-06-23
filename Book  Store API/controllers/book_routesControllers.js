const express = require('express');
const bookSchema = require('../models/bookSchema');



const app = express();


const getAlldata = async (req, res)=>{
 try {
  const getAll=  Book.find({});
  if(getAll?.length>0){
    res.status(200).json({
      message:'List of Book fetched succefully ',
      success:true,
      data:getAll
    })
  }else{
      res.status(400).json({
        message:'List of Book fetched Unsuccefully ',
        success:false
      })
    }
 } catch (error) {
  console.log(error);
  res.status(500).json({
    message:'Something went wrong Try Again!',
    success:false
  })
 }
}

const getOneData = async(req, res)=>{
  try {
     const currId = req.params.id;
  const getOneData = await Book.findById(currId)
  if(!getOneData){
    return res.status(400).json({
      success:false,
      message:'Book with the current ID is not found! Please try with another one'
    })
  }}
   catch (error) {
    console.log(error);
  }
 
}

const createData = async (req, res)=>{
  try {
    //data from client
     const newBookFromData= req.body;

     //data stored in mongodb
     const newlyCreatedBook = await book.create(newBookFromData);

     //if data in mongodb 
     if(newlyCreatedBook){
      res.status(201).json({
        success:true,
        message:'Book added',
        data:newBookFromData
      })

     }
  } catch (error) {
     console.log(error)
  }
}

const updateData = async(req, res)=>{
  
}

const deleteData = async(req, res)=>{
  
}

module.export = {getOneData, getAlldata, updateData, createData, deleteData};

