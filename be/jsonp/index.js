var http = require('http');
var PORT = 8888

// 创建一个 http 服务
var server = http.createServer(function(request, response) {
    response.end('hello world')
})

// 启动服务, 监听端口
server.listen(PORT, function() {
    console.log('服务启动成功, 正在监听: ', PORT)
})