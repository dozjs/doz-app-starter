const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const body = require('koa-body');
const app = new Koa();
const router = new Router();
const DozSSR = require('doz-ssr');

function startSSR () {
    app.context.dozSSR = new DozSSR('./public/index.html');
}

router.get('*', async ctx => {
    ctx.body = await ctx.dozSSR.render(ctx.path);
});

app
    .use(serve('./public/', {index: false}))
    .use(body())
    .use(router.routes())
    .use(router.allowedMethods());

if(process.env.NODE_ENV !== 'development') {
    app.listen(80, startSSR);
}

module.exports = {
    app,
    startSSR
};