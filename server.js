/**
 * Created by jpichardo on 2/18/17.
 */
// all of our routes will be prefixed with /api
// server.js
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/products');

var express = require("express"); //call express
var app = express(); //define our app using express
var Product = require("./src/models/product");
var bodyParser = require("body-parser");

//this will let us get the data from a POST
app.use(bodyParser.json()); // lee parámetros para peticiones application/json
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 8470;
// get all the products (accessed at GET http://localhost:8757/api/products))
app.get("/api/products/", function(req, res) {
        Product.find(function(err, products) {
            if (err)
                res.send(err);
              res.json(products);
      });
});
// get the product with that id(accessed at GET http://localhost:8757/api/products/:product_id) )
app.get("/api/products/:product_id",function(req,res){
  Product.findById(req.params.product_id,function(err, product){
    if(err)
          res.send(err);
        res.json(product);
  });
});
app.post("/api/products", function (req,res) {
  var product = new Product();  // create a new instance of the product model
  product.name = req.body.name;
  product.description = req.body.description;
  product.unitPrice = req.body.unitPrice;
  product.presentations = req.body.presentations;
  //save the product and check for errors
  res.send("Método post");
  product.save(function(err){
    if (err)
        res.send(err);
      res.json({message:'Product created'});
    });
});

// update the bear with this id (accessed at PUT http://localhost:8757/api/products/:product_id)
app.put("/api/products/:product_id",function(req, res){
  Product.findById(req.params.product_id, function(err, product){
    product.name = req.body.name;
    product.description = req.body.description;
    product.unitPrice = req.body.unitPrice;
    product.presentations = req.body.presentations;
    if(err)
      res.send(err);

    product.name=req.body.name; //update the products info
    //save the product
    product.save(function(err){
      if (err)
        res.send(err);
      res.json({message:"Product updated!"});
    });
  });
});
// delete the product with this id (accessed at DELETE http://localhost:8757/api/products/:product_id)
app.delete("/api/products/:product_id", function(req, res){
  Product.remove({
    _id: req.params.product_id
  }, function(err, product){
    if(err)
      res.send(err);
    res.json({message: "Successfully deleted"});
  });
});

app.listen(port, function(){
    console.log("app started");
    console.log("Server on port: " + port);
});
