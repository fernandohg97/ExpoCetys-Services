/**
 * Created by Fiorella Rodríguez on 3/4/17.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productPresentationSchema = new Schema({
    servings: {type: Number, required: true},
    discount: {
        percentage: {type: Number, required: true},
        expirationDate: {type: Date, required: true}
    },
    availability: {type: Number, required: true},
    availableDate: {type: Date, required: true}
});

const productSchema = new Schema({
    name: {type: String, required: true, index: {unique: true}},
    description: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    presentations: [productPresentationSchema]
});

module.exports = mongoose.model('Product', productSchema);
