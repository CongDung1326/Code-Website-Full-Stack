import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world with DonVau');
    })

    return app.use('/', router);
}

export default initWebRoutes;