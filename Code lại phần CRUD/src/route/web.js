const express = require("express");
const homeControllers = require('../controllers/homeControllers.js');

let router = express.Router();

let initWebRoutes = (app) => {
    // Lấy dữ liệu thì dùng get
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);

    // Phải sử dụng thằng post thì khi mà ấn sign in thì nó mới chịu đổi qua trang post crud (Coi tại phần form action='/post-crud')
    router.get('/crud', homeControllers.getCreateUser);
    // Post crud (Khi ấn sign in thì nó sẽ tạo vào database)
    router.post('/post-crud', homeControllers.postCRUD);
    router.get('/edit-crud', homeControllers.getEditCRUD);
    router.get('/edit-crud-infomation', homeControllers.getEditCRUDInfomation);
    // Edit crud (khi ấn edit)
    router.post('/edit-crud', homeControllers.postEditCRUD);
    // Delete crud (khi ấn delete)
    router.get('/delete-crud', homeControllers.deleteCRUD);
    return app.use('/', router);
}

module.exports = initWebRoutes;