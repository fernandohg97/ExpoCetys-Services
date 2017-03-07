//PRODUCT
{
	var mongoose     = require('mongoose');
	var Schema       = mongoose.Schema;
	var productSchema = new schema({
    id : ObjectId,
    name: String,
    description: String,
    unitPrice: Number,
    presentations: [{
        servings: Number,
        discount: {
            percentage: Number,
            expirationDate: Date
        },
        availability: String,
        availableDate: Date
    }]
})
module.exports = mongoose.model('Product', productSchema);
// UNICOS, INDICES, REQUERIDOS