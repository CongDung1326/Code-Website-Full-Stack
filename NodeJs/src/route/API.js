const express = require("express");
const APIControllers = require('../controllers/APIControllers.js');

let router = express.Router();

let initAPIRoutes = (app) => {
    router.get('/login', APIControllers.handleLogin);

    return app.use('/api', router);
}

module.exports = initAPIRoutes;