/**
 * Created by fernandohernandez on 2/18/17.
 */

// call the packages we need
var app = require("./src/models");


// Define port
var port = process.env.PORT || 8470;

// Port where the server runs
app.listen(port, () => {
  console.log('Listening at '+port);
});
