const app=require('./app');
app.listen(5050, function(){
    console.log("Server Run Success");
})




/*const express=require('express');
app=express();
app.get("/",function(req,res){
    res.send("Hello Express js");
})
app.listen(4000, function(){
    console.log("Server Run Success 4000 port")
})*/