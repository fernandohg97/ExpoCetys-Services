'use strict';

/**
 * Created by jpichardo on 3/21/17.
 */
const router = require('express').Router();
const products = require('./products');
const orders = require('./orders');
const clients = require('./clients');

router.use('/orders', orders);
router.use('/clients', clients);
router.use('/products', products);

module.exports = router;