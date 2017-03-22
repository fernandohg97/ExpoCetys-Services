const orderRouter = require('express').Router();
const Order = require('./order.model');

orderRouter.get('/', (req, res) => {
    Order.find((err, orders) => {
        if (err)
            res.send(err);
        res.json(orders);
    });
});

orderRouter.get('/:order_id', (req, res) => {
    Order.findById(req.params.order_id, (err, orders) => {
        if (err)
            res.send(err);
        res.json(orders);
    });
});

orderRouter.post('/', (req, res) => {
    let order = new Order(req.body);

    order.save(err => {
        if (err)
            res.send(err);
        res.json({message: 'Order created'});
    });
});

orderRouter.put('/:order_id', (req, res) => {
    Order.findById(req.params.order_id, (err, order) => {
        if (err)
            res.send(err);

        order.details = req.body.details;
        order.name = req.body.name;
        order.unitPrice = req.body.unitPrice;
        order.servings = req.body.servings;
        order.discountPercentage = req.body.discountPercentage;
        order.quantity = req.body.quantity;
        order.orderDate = req.body.orderDate;
        order.deliveryDate = req.body.deliveryDate;

        order.save(err => {
            if (err) res.send(err);
            res.json({message: 'Order updated'});
        });
    });
});

orderRouter.delete('/:order_id', (req, res) => {
    Order.remove({_id: req.params.order_id}, (err, orders) => {
        if (err)
            res.send(err);
        res.json({message: 'Successfully deleted'});
    });
});

module.exports = orderRouter;
