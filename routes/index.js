const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1'); // Correct path to controller

// Define separate routes for emilyRoute and hannahRoute
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);

module.exports = routes;
