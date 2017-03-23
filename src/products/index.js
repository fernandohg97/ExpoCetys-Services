const productRouter = require('express').Router();
const Product = require('./product.model');

productRouter.get('/', (req, res) => {
    let findPromise = Product.find().exec();

    findPromise.then(products => {
        res.json(products);
    }).catch(err => {
        res.send(err);
    });
});

productRouter.get('/:product_id', (req, res) => {
    let findPromise = Product.findById(req.params.product_id).exec();

    findPromise.then(product => {
        res.json(product);
    }).catch(err => {
        res.send(err);
    });
});

productRouter.post('/', (req, res) => {
    let product = new Product(req.body);
    let savePromise = product.save().exec();

    savePromise.then(() => {
        res.json({message: 'Created'})
    }).catch(err => {
        res.send(err);
    });
});

productRouter.put('/:product_id', (req, res) => {
    let updatePromise = Product.findByIdAndUpdate(req.params.product_id, {$set: req.body}).exec();

    updatePromise.then(product => {
        res.json({message: "Updated"})
    }).catch(err => {
        res.send(err);
    });
});

productRouter.delete('/:product_id', (req, res) => {
    let removePromise = Product.findByIdAndRemove(req.params.product_id).exec();

    removePromise.catch(err => {
        res.send(err);
    });
});

module.exports = productRouter;
