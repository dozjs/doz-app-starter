import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import body from 'koa-body'
//import DozSSR from 'doz-ssr'
import DozSSR from '../ssr/DozSSR.js'

/*
const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const body = require('koa-body')
const DozSSR = require('doz-ssr')
*/

const app = new Koa();
const router = new Router();
const isDevelop = process.env.NODE_ENV === 'development';
let dozSSR;

function createSSR () {
    dozSSR = new DozSSR('./dist/index.html');
}

router.get('*', async ctx => {
    if (isDevelop) createSSR();

    let [content] = await dozSSR.render(ctx.path, {
        reloadBundle: isDevelop,
        baseUrl: ctx.protocol + '://' + ctx.host,
        inject: `
            window.DOZ_APP_ID = 'my-app';
        `
    });

    ctx.body = content;
});

app
    .use(serve('./dist/', {index: false}))
    .use(body())
    .use(router.routes())
    .use(router.allowedMethods());

if (isDevelop) {
    app.listen(process.env.PORT, ()=>{
        console.log('\n');
        console.log('> Server started in develop mode.');
        console.log('');
    });
} else {
    app.listen(3000, createSSR);
}


export default app;
//module.exports = app;
