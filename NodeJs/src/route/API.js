const express = require("express");
const userAPIsControllers = require('../controllers/userAPIsControllers.js');

let router = express.Router();

let initAPIRoutes = (app) => {
    router.post('/login', userAPIsControllers.handleLogin);
    // Lấy all thông tin user
    router.get('/get-all-users', userAPIsControllers.handleGetAllUsers);

    // Create user
    router.post('/create-new-user', userAPIsControllers.handleCreateUser);
    // Delete user
    router.delete('/delete-user', userAPIsControllers.handleDeleteUser);
    // Edit user
    router.put('/edit-user', userAPIsControllers.handleEditUser);

    router.get('/test', userAPIsControllers.test);

    return app.use('/api', router);
}

module.exports = initAPIRoutes;