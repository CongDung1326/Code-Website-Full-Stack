const express = require("express");
const APIControllers = require('../controllers/APIControllers.js');

let router = express.Router();

let initAPIRoutes = (app) => {
    router.post('/login', APIControllers.handleLogin);

    router.get('/test', APIControllers.test)

    return app.use('/api', router);
}

module.exports = initAPIRoutes;