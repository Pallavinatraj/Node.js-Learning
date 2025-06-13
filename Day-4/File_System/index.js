const { isUtf8 } = require("buffer");
const { log } = require("console");
const fs = require("fs");
const { console } = require("inspector");
const path= require("path");

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data Folder Created");  
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello im going to create a File");
console.log("File created");

const readyFileFromPath = fs.readFileSync(filePath, "Utf8");
console.log("File Content :" ,readyFileFromPath);


fs.appendFileSync(filePath, "\nThis is the new file ");
console.log("New Line added");

const asyncFile = path.join(dataFolder, "aysnc_File.txt");

const fileAysnc = fs.writeFile(asyncFile, "Hello this is the Async File", (err)=>{
  if(err) throw err;

  fs.readFile(asyncFile, "utf8" , (err, data)=>{
     if(err) throw err;
     console.log(data);
     fs.appendFile(asyncFile, "\nThis is Extra line added", (err, updatedData)=>{
         if(err) throw err;
         console.log(updatedData);
     })
  });
})