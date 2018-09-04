
//const fs = require("fs");

//异步--多个操作可以同时进行，第一次的操作没完事，后一次也能操作
//同步--一次一个

//读文件
//readFile(文件名，回调函数)
//fs.readFile("aaa.txt",function(err,data){
//
//    if(err){
//        console.log("读取失败");
//    }else {
//        console.log(data.toString());
//    }
//
//});
//写文件

//
//fs.writeFile("bbb.txt","wrtad49as165awywtw ",function(err){
//        console.log(err);
//});
const  http = require("http");
const  fs = require("fs");
http.createServer(function(req,res){
    if(req.url=="/index"){
        fs.readFile(".index/html",(err,data)=>{
            res.end(data);
        })
    }else if(req.url=="index1"){
        fs.readFile(".index1/html",(err,data)=>{
            res.end(data);
        })
    }else if(req.url=="/red.css"){
        fs.readFile(".red/css",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/css;"});
            res.end(data);
        })
    }else if(req.url=="/01.jpg"){
        fs.readFile("./01.jpg",(err,data)=>{
            res.writeHead(200,{"Content-type":"image/jpg;"});
            res.end(data);
        })
    }else {
        res.end("23232")
    }

}).listen(3050);


//var server= http.createServer(function(req,res){
//    //res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
//    var file_name = './www'+req.url;
//    fs.readFile(file_name,function(err,data){
//        if (err){
//            res.write('404')
//        }else {
//            res.write(data)
//        }
//        res.end()
//    })
//})
//server.listen(3050);
////
//





//const  http = require('http');
//const  fs = require('fs');
//var server = http.createServer(function(req,res){
//    var file_name = './www'+req.url;
//    fs.readFile(file_name,function(err,data){
//        if (err){
//            res.write('404');
//        }else {
//            res.write(data)
//        }
//        //结束响应
//        res.end();
//    });
//
//
//});
//
//
//server.listen(3100);