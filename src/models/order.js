/**
 * Created by fernandohernandez on 3/4/17.
 */
var moongose = require("mongoose");
var Schema = moongose.Schema;

var orderDetailSchema = new Schema({
  product: {
    name: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    presentation: {
      servings: {type: Number, required: true},
      discountPercentage: {type: Number, required: true}
    }
  },
  quantity: {type: Number, required: true}
})

var orderSchema = new Schema({
    details: [orderDetailSchema],
    orderDate: {type: Date, required: true},
    deliveryDate: {type: Date, required: true},
    client: { type: Schema.Types.ObjectId, ref: "Client"}

});

module.exports = moongose.model("Order", orderSchema);
