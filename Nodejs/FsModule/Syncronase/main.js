let http=require('http');
let fs=require('fs');
let server=http.createServer(function(req,res){
    if(req.url=="/"){

        let MyData=fs.readFileSync('Home.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(MyData);
        res.end();

    }
});
server.listen(5000);
console.log("Surver Success Run");
