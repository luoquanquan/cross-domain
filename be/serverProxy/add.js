const Koa = require('koa');

const app = new Koa();
const PORT = 1111;


app.use((ctx) => {
  const { a, b } = ctx.query;
  const result = Number(a) + Number(b);
  ctx.body = { result };
});

app.listen(PORT, () => {
  console.log('the server is listen: ', PORT);
});
