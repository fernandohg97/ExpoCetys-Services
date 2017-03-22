const productRouter = require('express').Router();
const Product = require('./product.model');

productRouter.get('/', (req, res) => {
    Product.find((err, products) => {
        if (err)
            res.send(err);
        res.json(products);
    });
});

productRouter.get('/:product_id', (req, res) => {
    Product.findById(req.params.product_id, (err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    });
});

productRouter.post("/api/products", (req, res) => {
    let product = new Product();

    product.name = req.body.name;
    product.description = req.body.description;
    product.unitPrice = req.body.unitPrice;
    product.presentations = req.body.presentations;

    res.send("Método post");

    product.save(err => {
        if (err) res.send(err);

        res.json({message: 'Product created'});
    });

});

productRouter.put("/api/products/:product_id", (req, res) => {
    Product.findById(req.params.product_id, (err, product) => {

        product.name = req.body.name;
        product.description = req.body.description;
        product.unitPrice = req.body.unitPrice;
        product.presentations = req.body.presentations;

        if (err)
            res.send(err);

        product.save(err => {
            if (err)
                res.send(err);
            res.json({message: "Product updated!"});
        });

    });
});

productRouter.delete("/api/products/:product_id", (req, res) => {
    Product.remove({
        _id: req.params.product_id
    }, (err, product) => {
        if (err)
            res.send(err);
        res.json({message: "Successfully deleted"});
    });
});

module.exports = productRouter;
