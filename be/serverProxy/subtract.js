const Koa = require('koa');

const app = new Koa();
const PORT = 2222;


app.use((ctx) => {
  // 获取参数
  const { a, b } = ctx.query;
  // 尝试将参数转化为数字后进行加法操作
  const result = Number(a) - Number(b);
  ctx.body = { result };
});

app.listen(PORT, () => {
  console.log('the server is listen: ', PORT);
});
