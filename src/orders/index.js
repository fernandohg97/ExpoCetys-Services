const orderRouter = require('express').Router();
const Order = require('./order.model');

orderRouter.get('/', (req, res) => {
    let findPromise = Order.find().exec();

    findPromise.then(orders => {
        res.json(orders);
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.get('/:order_id', (req, res) => {
    let findPromise = Order.findById(req.params.order_id).exec();

    findPromise.then(order => {
        res.json(order);
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.post('/', (req, res) => {
    let order = new Order(req.body);
    let savePromise = order.save().exec();

    savePromise.then(() => {
        res.json({message: 'Created'})
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.put('/:order_id', (req, res) => {
    let updatePromise = Order.findByIdAndUpdate(req.params.order_id, {$set: req.body}).exec();

    updatePromise.then(order => {
        res.json({message: "Updated"})
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.delete('/:order_id', (req, res) => {
    let removePromise = Order.findByIdAndRemove(req.params.order_id).exec();

    removePromise.catch(err => {
        res.send(err);
    });
});

module.exports = orderRouter;
