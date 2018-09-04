
var http = require("http");
var server =http.createServer(function(req,res){ //req =>请求  res=>响应   创建服务器
     //console.log(arguments);
    //console.log(req.url);  //请求路径

    //设置响应头   状态码  设置类型               编码格式
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.write("abc 中国");
    //结束响应
    res.end();

});
    //监听服务        端口           IP
    server.listen(3240,"localhost");  //端口号