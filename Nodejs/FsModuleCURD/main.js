/*let http=require('http');
let server= http.createServer(function(req,res){
    res.write("Hello Node Js");
    res.end();
});
*/


//Create file
/*let http=require('http');
let fs=require('fs');
let server= http.createServer(function(req,res){

    fs.writeFile('demo1.text','Hello My Name is Lolit mohan Barman',function(e){
        if(e){
            res.end("Your File Create Fail");
        }else{
        res.end("Your File Create Success");

        }
    })
    
});
*/



// File Read kora
/*let http=require('http');
let fs=require('fs');
let server= http.createServer(function(req,res){
    
    fs.readFile('demo1.text',function(err,dada){
        res.write(dada);
        res.end();
    })
});
*/


// File Update kora
/*let http=require('http');
let fs=require('fs');
let server= http.createServer(function(req,res){
    
    fs.appendFile('demo1.text',' I Love you Purnima Rany',function(err){
        if(err){
            res.end("Update Fail");
        }else{
            res.end("demo1 File Update Success");
        }
    })
});
*/


// File Delete kora
/*let http=require('http');
let fs=require('fs');
let server= http.createServer(function(req,res){
    
    fs.unlink('demo.text',function(err){
        if(err){
            res.end("File demon1 Faild");
        }else{
            res.end("demo1 File Delete Success");
        }
    })
});
*/


// File Rename kora
/*let http=require('http');
let fs=require('fs');
let server= http.createServer(function(req,res){
    
    fs.rename('demo1.text','new.text',function(err){
        if(err){
            res.end("File demon1 Faild");
        }else{
            res.end("demo1 File Rename Success");
        }
    })
});
*/


server.listen(5050,function(){
    console.log("Server Run Success...");
})
