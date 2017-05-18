'use strict'

const express = require('express')
const productRouter = express.Router()
const ProductCtrl = require('../controllers/product.controller')

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

module.exports = productRouter
