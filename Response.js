// BEFORE EXPRESS FRAMEWORK

// const http=require('http')
// const Routes=require('./routing.js')


// // http.createServer((Routes)=>{
// // }).listen(4040);


// const server=http.createServer(Routes);

// server.listen(4040);






//AFTER EXPRESS FRAMEWORK

const http=require('http')
const express=require('express')
const app=express();
app.use((req,res,next)=>{
    console.log("This in First Middle Ware");
    next()
})

app.use((req,res,next)=>{
    console.log("This is Second Middle Ware");
    res.send('<h1>This is the Express Frame Work..!</h1>')
})
const server=http.createServer(app);
server.listen(4000);