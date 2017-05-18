'use strict'

const express = require('express')
const clientRouter = express.Router()
const ClientCtrl = require('../controllers/client.controller')

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

module.exports = clientRouter
