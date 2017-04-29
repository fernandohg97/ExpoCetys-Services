'use strict'
const Order = require('../models/order')

// Get all the orders
function getOrders (req, res) {
  let findOrder = Order.find()

  findOrder.then(order => {
    res.json(order)
  }).catch(err => {
    res.status(500).send(err)
  })
}
// Get one order by id
function getOrder (req, res) {
  let findIdOrder = Order.findById(req.params.order_id)

  findIdOrder.then(order => {
    if (order) {
      res.json(order)
    } else {
      res.status(404).json({message: 'Page not Found'})
    }
  }).catch(err => {
    res.status(500).send(err)
  })
}
// Create an order
function createOrder (req, res) {
  var order = new Order(req.body)

  let createOrder = order.save()

  createOrder.then(order => {
    res.json({message: 'Order created'})
  }).catch(err => {
    res.status(500).send({message: 'Error del server ' + err})
  })
}
// update an Order
function updateOrder (req, res) {
  let updateOrder = Order.findByIdAndUpdate(req.params.order_id, req.body)

  updateOrder.then(order => {
    if (order) {
      res.json({message: 'order updated'})
    } else { res.status(404).json({message: 'Page not found'}) }
  }).catch(err => {
    res.status(500).json({message: 'Error del server' + err})
  })
}
// Delete an order
function removeOrder (req, res) {
  let removeOrder = Order.findByIdAndRemove(req.params.order_id)

  removeOrder.then(order => {
    res.json({message: 'Succesfully deleted'})
  }).catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  removeOrder
}
