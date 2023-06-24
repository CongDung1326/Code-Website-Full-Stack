import express from "express";
import bodyParser from "body-parser"; // Dùng để lấy các query VD: /user?id=7
import viewEngine from './config/viewEngine.js'; // Cách kiểm tra ta đã tới được file đó chưa giữ ctrl + trõ vô src của nó
import initWebRoutes from './route/web.js';
import dotenv from 'dotenv';

let app = express();
dotenv.config(); // config mới sử dụng được thằng process.env.PORT

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running in http://localhost:${port}`));