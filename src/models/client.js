/**
 * Created by Daniel Valdez on 3/4/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.schema;

var addressSchema = new Schema({
    firstStreet: {type: String, required: true},
    secondStreet: String,
    postalCode: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    phone: {type: String, required: true}
});

var clientSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, index: true},
    password: {type: String, required: true},
    address: {type: Schema.Types.ObjectId, ref: addressSchema},
    account: {
        cardNumber: {type: String, required: true},
        holderName: {type: String, required: true},
        expirationDate: {type: String, required: true},
        address: {type: Schema.Types.ObjectId, ref: addressSchema}
    }
});

module.exports = mongoose.model('Client', clientSchema);
