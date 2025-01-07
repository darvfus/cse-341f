const express = require('express');
const app = express();
const routes = require('./routes/index'); // Correct path to routes

const port = process.env.PORT || 3000;

// Use routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Web Server is listening at port ${port}`);
});
