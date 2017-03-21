/**
 * Created by fernandohernandez on 2/18/17.
 */

// call the packages we need
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Order = require("./src/models/order");

mongoose.connect("mongodb://localhost/orders"); // Conexion a base de datos MongoDB

// this will let us get the data from a POST
app.use(bodyParser.json()); // para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));

// Get all the orders in json format
app.get("/api/orders", function(req, res) {
    Order.find(function(err, orders) {
        if (err)  res.send(err);
          res.json(orders);
    });
});

// Get a single order through order_id
app.get("/api/orders/:order_id", function(req, res) {
    Order.findById(req.params.order_id, function(err, orders) {
        if (err)  res.send(err);
          res.json(orders);
    });
});


app.post("/api/orders", function(req, res) {
    // create a js object with the properties of order model
    var order = new Order(req.body);

    // save the order
    order.save(function(err) {
        if (err) res.send(err);
          res.json({message: "Order created"});
    });
});

// Update the order with an id
app.put("/api/orders/:order_id", function(req, res) {
    // Find an order by order_id
    Order.findById(req.params.order_id, function(err, orders) {
        if (err)  res.send(err);

          order.details = req.body.details;
          order.name = req.body.name;
          order.unitPrice = rq.body.unitPrice;
          order.servings = req.body.servings;
          order.discountPercentage = req.body.discountPercentage;
          order.quantity = req.body.quantity;
          order.orderDate = req.body.orderDate;
          order.deliveryDate = req.body.deliveryDate;

        // save the order
        order.save(function(err) {
          if (err)  res.send(err);
            res.json({message: "Order updated"});
        });
    });
});

// Delete the order
app.delete("/api/orders/:order_id", function(req, res) {
    Order.remove({_id: req.params.order_id}, function(err, orders){
      if (err)  res.send(err);
        res.json({message: "Successfully deleted"});
      });
});

// Port where the server runs
app.listen(8470, () => {
  console.log('Listening at 8470');
});
