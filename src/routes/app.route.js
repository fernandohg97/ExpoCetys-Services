'use strict'
const express = require('express')
const orderRouter = express.Router()
const OrderCtrl = require('../controllers/order.controller')
const UserCtrl = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

// Token route
orderRouter.get('/private', auth, (req, res) => {
  res.status(200).send({message: 'Tienes acceso'})
})

// Get all the orders
orderRouter.get('/orders', auth, OrderCtrl.getOrders)

// Get a single order
orderRouter.get('/orders/:order_id', auth, OrderCtrl.getOrder)

// Create an order
orderRouter.post('/orders', auth, OrderCtrl.createOrder)

// Update an order - change info
orderRouter.put('/orders/:order_id', auth, OrderCtrl.updateOrder)

// Delete an order
orderRouter.delete('/orders/:order_id', auth, OrderCtrl.removeOrder)

// Create an user
orderRouter.post('/signup', UserCtrl.signUp)

// Log in user
orderRouter.post('/signin', UserCtrl.signIn)

module.exports = orderRouter
