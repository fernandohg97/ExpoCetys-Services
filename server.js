/**
 * Created by FER on 4/8/2017.
 */
'use strict'
const app = require('./app')
const mongoose = require('mongoose')
const config = require('./app.config')

mongoose.connect(config.db, (err, res) => {
  if (err) console.log('Error para conectar con MongoDB: ' + err)
  console.log('Conexion a la base de datos establecida...')
})

app.listen(config.port, () => {
  console.log('Listening on port ' + config.port)
})
