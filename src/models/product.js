/**
 * Created by Fiorella Hernandez on 3/4/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presentationDocument = new Schema({
    servings: {type: Number, required: true},
    discount: {
        percentage: {type: Number, required: true},
        expirationDate: {type: Date, required: true}
    },
    availability: {type: Number, required: true},
    availableDate: {type: Date, required: true}
});

var productSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: {type: String, index: {unique: true}},
    description: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    presentations: [presentationDocument]
});

module.exports = mongoose.model('Product', productSchema);