//Client

var mongoose = require("mongoose");
var schema = mongoose.schema;
var clientSchema = new schema({

    id: ObjectId
    details
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    address: {
        firstStreet: String,
        secondStreet: String,
        postalCode: String,
        city: String,
        state: String,
        phone: String
    },
    account: {
        cardNumber: String,
        holderName: String,
        expirationDate: String,
        address: {
            firstStreet: String,
            secondStreet: String,
            postalCode: String,
            city: String,
            state: String,
            phone: String

        }
    }
});
module.exports = mongoose.model('Client', clientSchema);
