/**
 * Created by fernandohernandez on 3/4/17.
 */

{
    id: ObjectId,
        details: [{
        product: {
            name: String,
            unitPrice: Number,
            presentation: {
                servings: Number,
                discountPercentage: Number
            },
        },
        quantity: Number,
    }],
        orderDate: Date,
        deliveryDate:Date,
        client: { type: Schema.Types.ObjectId, ref: "Client"}
}
