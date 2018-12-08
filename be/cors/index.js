const http = require('http');

const PORT = 8888;

// 协议名必填, 如果同时存在 http 和 https 就写两条s
const allowOrigin = ['http://127.0.0.1:8080', 'https://www.baidu.com'];

// 创建一个 http 服务
const server = http.createServer((request, response) => {
  const { headers: { origin } } = request;
  if (allowOrigin.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }
  response.setHeader('Access-Control-Allow-Methods', 'PUT');
  response.setHeader('Access-Control-Allow-Headers', 'token');
  response.end("{name: 'quanquan', friend: 'guiling'}");
});

// 启动服务, 监听端口
server.listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', PORT);
});
