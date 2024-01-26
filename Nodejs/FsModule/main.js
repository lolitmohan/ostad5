const http=require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){

if(req.url=="/"){
    fs.readFile('Home.html',function(error,data){
    
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    
    })
}else if(req.url=="/About.html"){
    fs.readFile('About.html',function(error,data){
    
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    
    })
}else if(req.url=="/Contact.html"){
    fs.readFile('Contact.html',function(error,data){
    
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    
    })
}else if(req.url=="/Services.html"){
    fs.readFile('Services.html',function(error,data){
    
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    
    })
}

});
server.listen(4040);
console.log("Server Run Success");
