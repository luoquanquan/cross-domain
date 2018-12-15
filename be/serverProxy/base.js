const Koa = require('koa');
const koaStatic = require('koa-static');
const axios = require('axios');

const app = new Koa();
const PORT = 1234;

app.use(koaStatic('./www'));

app.use(async (ctx) => {
  let ret;
  // 获取本次接收的请求的请求路径
  const path = ctx.req.url.split('?')[0];
  console.log('ctx.query.server', ctx.query.server);
  // 如果请求路径以api开头, 那么作为接口请求处理
  if (path.startsWith('/api')) {
    // 这样实现的路由不是很优雅, 但是能用 😂
    switch (path) {
      case '/api/getFriend':
        ret = { name: 'quanquan', friend: 'gl' };
        break;
      // 如果接口需要代理接口路径为 /api/proxy
      case '/api/proxy':
        // axios 直接访问前端给出的目标服务器url, 并将目标服务器返回的数据直接返回给前端
        ret = (await axios.get(ctx.query.server)).data;
        break;
      default:
        ret = { errno: 1, errmsg: '未知接口' };
        break;
    }
  }
  ctx.body = ret;
});

app.listen(PORT, () => {
  console.log('the server is listen: ', PORT);
});
