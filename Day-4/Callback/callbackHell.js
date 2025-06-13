const fs = require("fs");
const path = require("path");

const fileFolder = path.join(__dirname, "textFile.txt")


const newFile = fs.writeFile(fileFolder, "Hello im going learn Callback function", (err)=>{
   console.log(err);
   fs.readFile(fileFolder, "utf8", (err, data)=>{
     if(err) throw err;
     console.log(data);
     const upprCase = data.toUpperCase();

    fs.writeFile(fileFolder, upprCase, (err)=>{
      if(err) throw err;
      fs.readFile(fileFolder , "utf8", (err, updatedData)=>{
        if(err) throw err;
        console.log(updatedData);
      })
    });

   })
});





