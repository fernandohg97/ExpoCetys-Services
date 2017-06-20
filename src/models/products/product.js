'use strict'

/**
 * Created by Fiorella Rodríguez on 3/4/17.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = require('bluebird')

const productPresentationSchema = new Schema({
  servings: {type: Number, required: true},
  discount: {
    percentage: {type: Number, required: true},
    expirationDate: {type: Date, required: true}
  },
  availability: {
    type: String,
    enum: ['InStock', 'OutOfStock', 'Discontinued'],
    default: 'InStock',
    required: true
  },
  availableDate: {type: Date, required: true}
})

const productSchema = new Schema({
  name: {type: String, required: true, index: {unique: true}},
  description: {type: String, required: true},
  unitPrice: {type: Number, required: true},
  cover: {type: String, required: true},
  presentations: [productPresentationSchema]
})

module.exports = mongoose.model('Product', productSchema)
