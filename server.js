/**
 * Created by jpichardo on 2/18/17.
 */
var express = require("express");
var app = express();
var Order = require("./src/models/order");

app.get("/api/orders", function(req,res){
  console.log("Metodo GET");
  res.send("Order");
})

app.get("api/orders/:order_id", function(req,res){
  Order.find(function (err, orders) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(orders);
    }
  })
})

app.post("api/orders", function (req,res) {
  console.log("HOLAAA");
  res.send("Metodo POST");
})

app.listen(8080);
