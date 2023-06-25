import express from "express";
import * as homeControllers from '../controllers/homeControllers.js'

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);

    router.get('/about', homeControllers.getAboutPage);

    router.get('/cong_dung', (req, res) => {
        return res.send('Hello Hoang Cong Dung');
    });

    return app.use('/', router);
}

export default initWebRoutes;