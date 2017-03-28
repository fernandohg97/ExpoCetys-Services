'use strict';

/**
 * Created by J. Pichardo on 3/21/17.
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./app.config');
const router = require('./app.router');
const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(config['connectionString']);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

module.exports = app;