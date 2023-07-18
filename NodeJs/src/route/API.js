const express = require("express");
const userAPIsControllers = require('../controllers/userAPIsControllers.js');

let router = express.Router();

let initAPIRoutes = (app) => {
    router.post('/login', userAPIsControllers.handleLogin);
    // Lấy all thông tin user
    router.get('/get-all-users', userAPIsControllers.handleGetAllUsers);

    router.get('/test', userAPIsControllers.test);

    return app.use('/api', router);
}

module.exports = initAPIRoutes;