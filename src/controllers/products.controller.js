const Product = require('../models/product');

class ProductController {

    getAll = () => {
        return Product.find();
    }
}
