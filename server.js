<<<<<<< HEAD
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
=======
'use strict';

/**
 * Created by J. Pichardo on 21/03/17
 */
const app = require('./src/app');

const port = process.env.PORT || 8470;

app.listen(port, () => {
    console.log('Listening on ' + port);
});
>>>>>>> 8a60cc4c54db95b76394fa7ee479804d3ca529ef
