const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router
    .get('/', getProducts)
    .post('/', postProducts)
    .patch('/:productId', patchProduct)
    .delete('/:productId', deleteProduct)

async function getProducts(ctx) {
    ctx.body = {
        message: 'Handling GET requests to /products'
    }
}

async function postProducts(ctx) {
    ctx.status = 201;
    ctx.body = {
        message: 'Handling POST requests to /products'
    }
}

async function patchProduct(ctx) {
    ctx.body = {
        message: 'Updated product!'
    }
}

async function deleteProduct(ctx) {
    ctx.body = {
        message: 'Deleted product!'
    }
}

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = router;