'use strict'
const Product = require('../models/products/product')

// Get all the orders
function getProducts (req, res) {
  let findProduct = Product.find()

  findProduct.then(product => {
    res.json(product)
  }).catch(err => {
    res.status(500).send(err)
  })
}
// Get one order by id
function getProduct (req, res) {
  let findIdProduct = Product.findById(req.params.product_id)

  findIdProduct.then(product => {
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({message: 'Page not Found'})
    }
  }).catch(err => {
    res.status(500).send(err)
  })
}
// Create an order
function createProduct (req, res) {
  var product = new Product(req.body)

  let createProduct = product.save()

  createProduct.then(product => {
    res.json({message: 'Product created'})
  }).catch(err => {
    res.status(500).send({message: 'Error del server ' + err})
  })
}
// update an Order
function updateProduct (req, res) {
  let updateProduct = Product.findByIdAndUpdate(req.params.product_id, req.body)

  updateProduct.then(product => {
    if (product) {
      res.json({message: 'Product updated'})
    } else { res.status(404).json({message: 'Page not found'}) }
  }).catch(err => {
    res.status(500).json({message: 'Error del server' + err})
  })
}
// Delete an order
function removeProduct (req, res) {
  let removeProduct = Product.findByIdAndRemove(req.params.product_id)

  removeProduct.then(product => {
    res.json({message: 'Succesfully deleted'})
  }).catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct
}
