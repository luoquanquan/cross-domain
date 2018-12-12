const Koa = require('koa');

const app = new Koa();
const PORT = 1234;

app.use((ctx) => {
  console.log(ctx.req.url);
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
  console.log('the server is listen: ', PORT);
});
