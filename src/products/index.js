const _ = require('underscore');
const productRouter = require('express').Router();
const Product = require('./product.model');

productRouter.get('/', (req, res) => {
    let findPromise = Product.find();

    findPromise.then(products => {
        res.json(products);
    }).catch(err => {
        res.send(err);
    });
});

productRouter.get('/:product_id', (req, res) => {
    let findPromise = Product.findById(req.params.product_id);

    findPromise.then(product => {
        res.json(product);
    }).catch(err => {
        res.send(err);
    });
});

productRouter.post('/', (req, res) => {
    let product = new Product(req.body);

    let savePromise = product.save();

    savePromise.then(product => {
        res.json(product);
    }).catch(err => {
        res.send(err);
    });
});

productRouter.put('/:product_id', (req, res) => {
    let updatePromise = Product.findById(req.params.product_id);

    updatePromise.then(product => {
        product = new Product(_.extend(req.body, {_id: req.params.product_id}));
        product.isNew = false;
        return product.save();
    }).then(product => {
        if (product)
            res.json(product);
        else
            res.status(404).json({message: "Not Found"});
    }).catch(err => {
        res.send(err);
    });

});

productRouter.delete('/:product_id', (req, res) => {
    let removePromise = Product.findByIdAndRemove(req.params.product_id);

    removePromise.then(() => {
        res.json({message: "Deleted"});
    }).catch(err => {
        res.send(err);
    });
});

module.exports = productRouter;
