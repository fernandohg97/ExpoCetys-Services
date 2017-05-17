/**
 * Created by FER on 4/8/2017.
 */
'use strict'
const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const orderRouter = require('./src/routes/app.route')
const clientRouter = require('./src/routes/app.route')
const productRouter = require('./src/routes/app.route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
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
