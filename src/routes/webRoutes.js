const express = require('express');
const routes = express.Router();
const webControllers = require('../controllers/webControllers');

routes.get('/', webControllers.index);

module.exports = routes;