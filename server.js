'use strict';

/**
 * Created by J. Pichardo on 21/03/17
 */
const app = require('./src/app');

const port = process.env.PORT || 8470;

app.listen(port, () => {
    console.log('Listening on ' + port);
});
