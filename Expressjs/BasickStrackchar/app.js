const express=require('express');

const router=require('./src/routers/api');

const app=new express();

//Routing Implement
app.use("/api/v1",router);


// Undefined Route Implemetn
app.use("*",(req,res)=>{
    res.status(400).json({status:"fail",data:"Not Found"})
})

module.exports=app;