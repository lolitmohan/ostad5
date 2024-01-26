let http=require('http');
let URL=require('url');
let server=http.createServer(function(req,res){

    let Myurl="https://www.daraz.com.bd/smartphones/apple/?spm=a2a0e.home.cate_6_1.8.735212f7L7P0TR&from=filter"

    let MyObj = URL.parse(Myurl,true);
    let HostName= MyObj.host;
    let PathName=MyObj.path;
    let SearchQueary=MyObj.search;


    res.writeHead(200,{'content-type':'text/html'});
    res.write(PathName);
    res.write(SearchQueary);
    res.end();



});
server.listen(5050);
console.log("Server Run Success");