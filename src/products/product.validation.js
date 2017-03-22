/**
 * Created by jpichardo on 3/21/17.
 */
class ProductValidation {
    static UnitPriceValidator = {
        validator: v => {
            return v > 0;
        },
        message: 'UnitPrice can\'t be zero or negative'
    };
}

module.exports = ProductValidation;