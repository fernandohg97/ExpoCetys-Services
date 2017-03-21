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


// Port where the server runs
app.listen(8470, () => {
  console.log('Listening at 8470');
});
