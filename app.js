const Koa = require('Koa');

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = {
        message: 'It works!'
    }
});

module.exports = app;