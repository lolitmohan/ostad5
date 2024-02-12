let http=require('http');
let fs=require('fs');
let server=http.createServer(function(req,res){
    

    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>This is Home Page</h1>');
        res.end();
    }else if(req.url=="/about"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>This is About Page</h1>');
        res.end();
    }else if(req.url=="/contact"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>This is Contact Page</h1>');
        res.end();
    }else if(req.url=="/file-write"){
        res.writeHead(200,{'content-type':'text/html'});
        
        fs.writeFile('demo.text','Hello world',function(e){
            if(e){
                res.end("Your File Create Fail");
            }else{
                res.write('Hello World');
                res.end("");
            }
        })
    }
    
});
server.listen(5500);
console.log("Server Run Success");
