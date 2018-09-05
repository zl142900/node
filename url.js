const  http = require("http");
const  url = require("url");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;
        if(pathname=="/student"){
            if((query.id).length<4){
                res.write("学生:id="+query.id)
            }else {
                res.write("学生的id错误");
            }

        }else if(pathname=="/teacher"){
            if((query.id).length<4){
                res.write("老师:id="+query.id)
            }else {
                res.write("老师的id错误");
            }

        }

    //query 时如果第二个对象为true  会转化为一个对象;
    //query 时如果第二个对象为false 会转化为null;
    res.end()
}).listen(3055,"localhost");