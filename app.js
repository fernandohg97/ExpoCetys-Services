/**
 * Created by FER on 4/8/2017.
 */
'use strict'
const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const orderRouter = require('./src/routes/order.routes')
const clientRouter = require('./src/routes/client.routes')
const productRouter = require('./src/routes/product.routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('view engine', '.hbs')
// Set routes prefix
app.use('/api', orderRouter)
app.use('/api', clientRouter)
app.use('/api', productRouter)

app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/', (req, res) => {
  res.render('order')
})

module.exports = app
