const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router
    .get('/', getOrders)
    .get('/:orderId', getOrder)
    .post('/', postOrders)
    .delete('/:orderId', deleteOrder)

async function getOrders(ctx) {
    ctx.body = {
        message: 'Orders were fetched'
    }
}

async function getOrder(ctx) {
    ctx.body = {
        message: 'Orders details',
        orderId: ctx.params.orderId
    }
}

async function postOrders(ctx) {
    ctx.status = 201;
    ctx.body = {
        message: 'Order was created'
    }
}

async function deleteOrder(ctx) {
    ctx.body = {
        message: 'Deleted product!',
        orderId: ctx.params.orderId
    }
}
    

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = router;