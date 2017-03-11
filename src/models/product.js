//PRODUCT
{
    var mongoose     = require('mongoose');
    var Schema       = mongoose.Schema;
    var productSchema = new schema({
        id : ObjectId,
        name: {type: String, index:{unique: true}},
        description: {type:String, required: true},
        unitPrice:{type: Number, required:true},
presentations: [{type:Array, required:true,
        servings: Number,
        discount: {
            percentage:{type:Number, required:true},
            expirationDate:{type:Date, required:true},
        },
        availability:{type:String, required:true},
        availableDate:{type:Date, required:true}
    }]
})
module.exports = mongoose.model('Product', productSchema);