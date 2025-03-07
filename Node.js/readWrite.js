/**
 * Read fron an external file
 */
const fs = require('fs')
// console.log(typeof fs) 

/*
*Read in the sync way
*/
// console.log("before starting to read");

// const content=fs.readFileSync("input.txt");
/*
*READ in asyn way
*/
// fs.readFile('input.txt',(err,content)=>{

//     if(err){
//         return console.log(err);
//     }
//     console.log("content of the file is:"+ content)
// })

//  console.log("Output content is:"+ content);

//  console.log("Last line");

/** 
 * Write the code to write to an external file
 **/

console.log("before");
// fs.writeFileSync('output1.txt','Hello Students');
fs.writeFile('output2.txt',"Hello Students again!!", err=>{
    if(err){
        return console.log(err);
    }
    console.log("successfully Written");
})
console.log("after");