const mongoose = require('mongoose');
const { data } = require('react-router-dom');


//MongooDb Connection
mongoose.connect('mongodb+srv://pallavinatraj31:pallavinatraj31@cluster0.dr6kdrq.mongodb.net/usersDB',{
 useNewUrlParser :true,
 useUnifiedTopology:true
})
.then(()=>{
  console.log('succsfully Connected to MongoDb');
})
.catch((err)=>{
  console.log(err)
});

//Schema Define 
const userSchema = new mongoose.Schema({
  name : String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags:[String],
  createdAt: {type:Date, default:Date.now}
});

//define user Model 
const user = mongoose.model('user', userSchema);

async function runQueryExamples(){
   try {
    
     const newUser = await user.create({
       name : 'Dhanush',
       email: 'dhanushshetty@gmail.com',
       age: 17,
       isActive: true,
       tags:['developer', 'video editor', 'software engineer'],
     });

     console.log('newUser:', newUser);

    // const newUser = new user({
    //     name : 'Chandu',
    //     email: 'Chandunatraj31@gmail.com',
    //     age: 21,
    //     isActive: true,
    //     tags:['developer', 'video editor', 'software engineer'],
    // })
    //   await newUser.save();
    //  console.log('user created', newUser);
    // const allUser =  await user.findOne({name:'Dhanush'}).select('name email -_id');
    // console.log('allUser details are:', allUser );

    //  const allUser =  await user.find().limit(3).select('name email -_id');
    //  console.log('allUser details are:', allUser );

    //   const allUser =  await user.find().sort({age:1})
    //  console.log('allUser details are:', allUser );

    //  const allUser =  await user.countDocuments({isActive:false});
    //  console.log('allUser details are:', allUser );

    //  const allUser =  await user.findByIdAndDelete(newUser._id);
    //  console.log('allUser details are:', allUser );

     const allUser =  await user.findByIdAndUpdate(newUser._id, 
      {
      $set: {age:100}, $push: {tags:'upated'}
     }, 
     {new:true});
     console.log('allUser details are:', allUser );

   } catch (error) {
     console.log(error);
   }
   finally{
    await mongoose.connection.close();
   }
}
runQueryExamples();

