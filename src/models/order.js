/**
 * Created by fernandohernandez on 3/4/17.
 */
var moongose = require("mongoose");
var Schema = moongose.Schema;

var orderSchema = new Schema({

    id: Schema.Types.ObjectId,
    details: [{formType: Array,
      product: {
        name: String,
        unitPrice: Number,
        presentation: {
          servings: Number,
          discountPercentage: Number
        }
      },
      quantity: Number
    }],
    orderDate: {type: Date},
    deliveryDate: {type: Date},
    client: { type: Schema.Types.ObjectId, ref: "Client"}

});

module.exports = moongose.model("Order", orderSchema);
