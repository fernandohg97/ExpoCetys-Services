/**
 * Created by jpichardo on 3/21/17.
 */
const router = require('express').Router();
const products = require('./products/index');
const orders = require('./orders/index');
const clients = require('./clients/index');

router.use('/orders', orders);
router.use('/clients', clients);
router.use('/products', products);

module.exports = router;