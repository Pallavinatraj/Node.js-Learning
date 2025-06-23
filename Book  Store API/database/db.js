const mongoose = require('mongoose');

const connectDB = async ()=>{
  try {
    const user = await mongoose.connect('mongodb+srv://pallavinatraj31:pallavinatraj31@cluster0.dr6kdrq.mongodb.net/userDB')
  } catch (error) {
    console.log('Database is not connected', error)
    process.exit(1);
  }
}


module.exports = connectDB;