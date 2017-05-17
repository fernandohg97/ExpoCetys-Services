'use strict'
const express = require('express')
const orderRouter = express.Router()
const productRouter = express.Router()
const clientRouter = express.Router()
const OrderCtrl = require('../controllers/order.controller')
const ProductCtrl = require('../controllers/product.controller')
const ClientCtrl = require('../controllers/client.controller')
const UserCtrl = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

// Token route
orderRouter.get('/private', auth, (req, res) => {
  res.status(200).send({message: 'Tienes acceso'})
})

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

// Create an user
orderRouter.post('/signup', UserCtrl.signUp)

// Log in user
orderRouter.post('/signin', UserCtrl.signIn)

// PRODUCTS
// get all the products
productRouter.get('/products', ProductCtrl.getProducts)

// get a single product
productRouter.get('/products/:product_id', ProductCtrl.getProduct)

// create a product
productRouter.post('/products', ProductCtrl.createProduct)

// update a product
productRouter.put('/products/:product_id', ProductCtrl.updateProduct)

// delete a product
productRouter.delete('/products/:product_id', ProductCtrl.removeProduct)

// CLIENTS
// get all the clients
clientRouter.get('/clients', ClientCtrl.getClients)

// get a single client
clientRouter.get('/clients/:client_id', ClientCtrl.getClient)

// create a client
clientRouter.post('/clients', ClientCtrl.createClient)

// update a client
clientRouter.put('/clients/:client_id', ClientCtrl.updateClient)

// delete a client
clientRouter.delete('/clients/:client_id', ClientCtrl.removeClient)

module.exports = orderRouter
module.exports = productRouter
module.exports = clientRouter
