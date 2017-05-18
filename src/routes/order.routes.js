'use strict'

const express = require('express')
const orderRouter = express.Router()
const OrderCtrl = require('../controllers/order.controller')


// ORDERS
// Get all the orders
orderRouter.get('/orders', OrderCtrl.getOrders)

// Get a single order
orderRouter.get('/orders/:order_id', OrderCtrl.getOrder)

// Create an order
orderRouter.post('/orders', OrderCtrl.createOrder)

// Update an order - change info
orderRouter.put('/orders/:order_id', OrderCtrl.updateOrder)

// Delete an order
orderRouter.delete('/orders/:order_id', OrderCtrl.removeOrder)

module.exports = orderRouter
