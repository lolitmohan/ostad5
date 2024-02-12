const app=require('./app');
app.listen(5050, function(){
    console.log("Server Run Success");
})




/*const express=require('express');
app=express();

app.get("/",function(req,res){
    res.send("Home Page");
})

app.get("/about",function(req,res){
    res.send("Your About page");
})

app.get("/contact",function(req,res){
    res.send("Your Contact Page");
})

app.get("/services",function(req,res){
    res.send("Your Services Page");
})
app.listen(4000, function(){
    console.log("Server Run Success 4000 port")
})*/