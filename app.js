const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

router.use('/products', productRoutes.routes(), productRoutes.allowedMethods());
router.use('/orders', orderRoutes.routes(), orderRoutes.allowedMethods());
app.use(router.routes());

module.exports = app;