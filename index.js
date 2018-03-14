const Koa = require('koa');
const proxy = require('koa-proxy');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

router.get('/msone', (ctx, next) => {
  ctx.body = 'msone!!!!';
});

app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx) => {
  console.log(ctx.request.origin);
  ctx.body = '<h1>Hello World</H1>';
});

app.listen(3000);
