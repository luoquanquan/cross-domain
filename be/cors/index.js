const http = require('http');

const PORT = 8888;

// 创建一个 http 服务
const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'PUT');
  response.end("{name: 'quanquan', friend: 'guiling'}");
});

// 启动服务, 监听端口
server.listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', PORT);
});
