const router        = require('express').Router();
const productRouter = require('./product.routes); 
const orderRouter   = require('./order.routes); 
const clientRouter  = require('./client.routes); 


router.use('/orders', orderRouter);
router.use('/clients', clientRouter);
router.use('/products', productRouter);

module.exports = router;
