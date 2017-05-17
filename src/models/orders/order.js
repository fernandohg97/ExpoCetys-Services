/**
 * Created by FER on 4/8/2017.
 */
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const valid = require('./order.validation')

mongoose.Promise = require('bluebird')

const OrderDetailSchema = new Schema({
  product: {
    name: {type: String, required: [true, 'El nombre del producto es requerido'], validate: [validator.isAlphanumeric, 'El nombre de la orden puede contener letras y numeros']},
    unitPrice: {type: Number, required: [true, 'El precio del producto es requerido']},
    presentation: {
      servings: {type: Number, required: [true, 'La cantidad de servings son requeridos'], validate: valid.presentationValidation},
      discountPercentage: Number
    }
  },
  quantity: {type: Number, required: [true, 'La cantidad de productos es requerido'], min: [1, 'Ingresa una cantidad valida']}
})

const OrderSchema = new Schema({
  details: {type: [OrderDetailSchema], validate: valid.detailsValidation},
  orderDate: {type: Date, required: [true, 'La fecha del pedido es requerida'], validate: valid.orderDateValidation},
  deliveryDate: {type: Date, required: [true, 'La fecha de entrega es requerida']},
  client: {type: Schema.Types.ObjectId, ref: 'Client'}
})

module.exports = mongoose.model('Order', OrderSchema)
