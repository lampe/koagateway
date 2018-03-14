const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '<h1>Microservice One</H1>';
});

app.listen(3001);
