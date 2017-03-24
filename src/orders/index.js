const orderRouter = require('express').Router();
const Order = require('./order.model');

orderRouter.get('/', (req, res) => {
    let findPromise = Order.find();

    findPromise.then(orders => {
        res.json(orders);
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.get('/:order_id', (req, res) => {
    let findPromise = Order.findById(req.params.order_id);

    findPromise.then(order => {
        res.json(order);
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.post('/', (req, res) => {
    let order = new Order(req.body);
    let savePromise = order.save();

    savePromise.then(() => {
        res.json({message: 'Created'})
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.put('/:order_id', (req, res) => {
    let updatePromise = Order.findById(req.params.order_id);

    updatePromise.then(order => {
        order = new Order(_.extend(req.body, {_id: req.params.order_id}));
        order.save();
    }).then(order => {
        if (order)
            res.json(order);
        else
            res.status(404).json({message: "Not Found"});
    }).catch(err => {
        res.send(err);
    });
});

orderRouter.delete('/:order_id', (req, res) => {
    let removePromise = Order.findByIdAndRemove(req.params.order_id);

    removePromise.catch(err => {
        res.send(err);
    });
});

module.exports = orderRouter;
