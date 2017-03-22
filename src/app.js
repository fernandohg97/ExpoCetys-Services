/**
 * Created by jpichardo on 3/21/17.
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./app.router');
const app = express();

mongoose.connect('mongodb://localhost/GoCenter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

module.exports = app;