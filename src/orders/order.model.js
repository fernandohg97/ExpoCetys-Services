/**
 * Created by Fernando Hernandez on 3/4/17.
 */
const moongose = require("mongoose");
const Schema = moongose.Schema;

const OrderDetailSchema = new Schema({
    product: {
        name: {type: String, required: true},
        unitPrice: {type: Number, required: true},
        presentation: {
            servings: {type: Number, required: true},
            discountPercentage: Number
        }
    },
    quantity: {type: Number, required: true}
});

const OrderSchema = new Schema({
    details: [OrderDetailSchema],
    orderDate: {type: Date, required: true},
    deliveryDate: {type: Date, required: true},
    client: {type: Schema.Types.ObjectId, ref: "Client"}
});

module.exports = moongose.model("Order", OrderSchema);
