const express = require("express");
const homeControllers = require('../controllers/homeControllers.js');

let router = express.Router();

let initWebRoutes = (app) => {
    // Lấy dữ liệu thì dùng get
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);

    // Phải sử dụng thằng post thì khi mà ấn sign in thì nó mới chịu đổi qua trang post crud (Coi tại phần form action='/post-crud')
    router.get('/crud', homeControllers.getCRUD);
    router.post('/post-crud', homeControllers.postCRUD);
    router.get('/get-crud', homeControllers.displayGetCRUD);
    router.get('/edit-crud', homeControllers.getEditCRUD);

    router.post('/put-crud', homeControllers.putCRUD);

    return app.use('/', router);
}

module.exports = initWebRoutes;