const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

// Define separate routes for emilyRoute and hannahRoute
app.get('/emily', lesson1Controller.emilyRoute);
app.get('/hannah', lesson1Controller.hannahRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});
