/**
 * Created by Fernando Hernandez on 3/4/17.
 */
var moongose = require("mongoose");
var Schema = moongose.Schema;
var dateValidator = require("./order.validation");


var orderDetailSchema = new Schema({
  product: {
    name: {type: String, required: [true, "Ingresa el nombre del producto porfavor"]},
    unitPrice: {type: Number, required: [true, "Ingresa el precio unitario del producto"]},
    presentation: {
      servings: {type: Number, required: [true, "Ingresa la cantidad de porciones"], min: [10, "La cantidad minima es 10"]},
      discountPercentage: {type: Number, min: [1, "El descuento minimo es 1"], max: [100, "El descuento maximo es 100"]}
    }
  },
  quantity: {type: Number, required: [true, "Ingresa el numero de productos"], min:[1, "El numero minimo de productos es 1"]}
})

var orderSchema = new Schema({
    details: [orderDetailSchema],
    orderDate: {type: Date, validate: [dateValidator, "La fecha de entrega deber ser mayor a la fecha de orden"], required: [true, "La fecha de orden es requerida"]},
    deliveryDate: {type: Date, required: [true, "La fecha de entrega es requerida"]},
    client: { type: Schema.Types.ObjectId, ref: "Client"}
});

module.exports = moongose.model("Order", orderSchema);
