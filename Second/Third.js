const fs = require('fs')
const readline = require('readline');

//Read and Write File in Asyncrounsly

fs.readFile("./Second/start.txt" , 'utf-8', (error1, data1)=>{
    console.log(data1);
    fs.readFile(`./Second/${data1}.txt`, 'utf-8', (error2,data2)=>{
        console.log(data2);
        const con = "hello added";
        fs.writeFile(`./Second/output.txt`, con,()=>{
            console.log("Succefully added");
        })
    });
         
});
console.log("reading...");