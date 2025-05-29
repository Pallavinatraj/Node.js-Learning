const readline = require('readline');
//Reading and Writing of File 
const fs = require('fs');

const text = fs.readFileSync('./Second/input.txt', 'utf-8');
console.log(text);

const content = `data imported from input.txt\n ${text} \nNow data and Time is ${new Date()}`;
const txtIn = fs.writeFileSync('./Second/output.txt', content);
console.log(txtIn);


