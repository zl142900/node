const  http = require("http");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    console.log(req.url);
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.write("<h1>标题</h1>");
    res.write("<h1>标题</h1>");
    res.write("<h1>标题</h1>");
   res.end((1+2+3).toString());
}).listen(3055,"localhost");