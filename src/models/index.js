/**
 * Created by fernandohernandez on 2/18/17.
 */

// call the packages we need
var express = require("express");
var app = express();
var orderRouter = express.Router();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Order = require("./order");
var Promise = require("bluebird");
var _ = require("underscore");

mongoose.connect("mongodb://localhost/orders"); // Conexion a base de datos MongoDB

// this will let us get the data from a POST
app.use(bodyParser.json()); // para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));
// Instance the api route
app.use("/api", orderRouter);



// Routes to use
// orderRouter.route("/orders");
// orderRouter.route("/orders/:order_id");



// Get all the orders in json format
orderRouter.get("/orders", (req, res) => {

  let findPromise = Order.find();

  findPromise.then(orders => {
    res.json(orders);
  }).catch(err => {
      res.status(500).send(err);
    });
});

// Get a single order through order_id
orderRouter.get("/orders/:order_id", (req, res) => {

    let findIdPromise = Order.findById(req.params.order_id);

    findIdPromise.then(order => {
      if (order)
        res.json(order);
      else
        res.status(404).send("Page not FOUND");
    }).catch(err => {
        res.status(500).send(err);
      });
});


// Create an order
orderRouter.post("/orders", (req, res) => {
    // create a js object with the properties of order model
    let order = new Order(req.body);

    let savePromise = order.save();
    // save the order
    savePromise.then(() => {
      res.json({message: "Order created"});
    }).catch(err => {
        res.status(500).send(err);
    });
});

// Update the order with an id
orderRouter.put("/orders/:order_id", (req, res) => {
    // Find an order by order_id
    let updatePromise = Order.findById(req.params.order_id);

    updatePromise.then(order => {
      order = new Order(_.extend(req.body, {_id: req.params.order_id}));
      order.save();
    }).then(order => {
      if (order)
        res.json({message: "Order updated"});
      else
        res.status(404).json({message: "Page Not FOUND"});
    }).catch(err => {
        res.status(500).send(err);
    });
});

// Delete the order
orderRouter.delete("/orders/:order_id", (req, res) => {

  let deletePromise = Order.remove({_id: req.params.order_id});

    deletePromise.then(() => {
      res.json({message: "Successfully deleted"});
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = orderRouter;
module.exports = app;
