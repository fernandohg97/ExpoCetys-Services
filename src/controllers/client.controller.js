'use strict'
const Client = require('../models/clients/client')

// Get all the orders
function getClients (req, res) {
  let findClient = Client.find()

  findClient.then(client => {
    res.json(client)
  }).catch(err => {
    res.status(500).send(err)
  })
}
// Get one order by id
function getClient (req, res) {
  let findIdClient = Client.findById(req.params.client_id)

  findIdClient.then(client => {
    if (client) {
      res.json(client)
    } else {
      res.status(404).json({message: 'Page not Found'})
    }
  }).catch(err => {
    res.status(500).send(err)
  })
}
// Create an order
function createClient (req, res) {
  var client = new Client(req.body)

  let createClient = client.save()

  createClient.then(order => {
    res.json({message: 'Client created'})
  }).catch(err => {
    res.status(500).send({message: 'Error del server ' + err})
  })
}
// update an Order
function updateClient (req, res) {
  let updateClient = Client.findByIdAndUpdate(req.params.client_id, req.body)

  updateClient.then(client => {
    if (client) {
      res.json({message: 'Client updated'})
    } else { res.status(404).json({message: 'Page not found'}) }
  }).catch(err => {
    res.status(500).json({message: 'Error del server' + err})
  })
}
// Delete an order
function removeClient (req, res) {
  let removeClient = Client.findByIdAndRemove(req.params.client_id)

  removeClient.then(client => {
    res.json({message: 'Succesfully deleted'})
  }).catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  removeClient
}
