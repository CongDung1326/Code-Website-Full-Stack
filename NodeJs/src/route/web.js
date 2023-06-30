const express = require("express");
const homeControllers = require('../controllers/homeControllers.js');

let router = express.Router();

let initWebRoutes = (app) => {
    // Lấy dữ liệu thì dùng get
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);
    router.get('/crud', homeControllers.getCRUD);

    // Phải sử dụng thằng post thì khi mà ấn sign in thì nó mới chịu đổi qua trang post crud (Coi tại phần form action='/post-crud')
    router.post('/post-crud', homeControllers.postCRUD);

    return app.use('/', router);
}

module.exports = initWebRoutes;