/**
 * Created by Fernando Hernandez on 3/4/17.
 */
var moongose = require("mongoose");
var Schema = moongose.Schema;

var detailSchema = new Schema({
    product: {
        name: String,
        unitPrice: Number,
        presentation: {
            servings: Number,
            discountPercentage: Number
        }
    },
    quantity: Number
});

var orderSchema = new Schema({
    details: [detailSchema],
    orderDate: {type: Date, required: true},
    deliveryDate: {type: Date, required: true},
    client: {type: Schema.Types.ObjectId, ref: "Client"}
});

module.exports = moongose.model("Order", orderSchema);
