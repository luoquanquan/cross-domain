const http = require('http');
const url = require('url');

const PORT = 8888;

// 创建一个 http 服务
const server = http.createServer((request, response) => {
  const queryObj = url.parse(request.url, true).query;
  response.end(`${queryObj.callback}({name: 'quanquan', friend: 'guiling'})`);
});

// 启动服务, 监听端口
server.listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', PORT);
});
