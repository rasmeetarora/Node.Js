/*
server by node.js modules server 
*/
const http = require('http')

const server =http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end('Hello World!');
    }else{
        res.end("you are trying to hit a wrong url");
    }
})
 server.listen(8000,()=>{
    console.log("server is started");
 })