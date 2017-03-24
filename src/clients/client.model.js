/**
 * Created by Daniel Valdez on 3/4/17.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

const AddressSchema = new Schema({
    firstStreet: {type: String, required: true},
    secondStreet: String,
    postalCode: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    phone: {type: String, required: true}
});

const AccountSchema = new Schema({
    cardNumber: {type: String, required: true},
    holderName: {type: String, required: true},
    expirationDate: {type: String, required: true},
    address: AddressSchema
});

const ClientSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, index: true},
    password: {type: String, required: true},
    address: AddressSchema,
    account: AccountSchema
});

module.exports = mongoose.model('Client', ClientSchema);
