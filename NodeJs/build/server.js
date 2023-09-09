"use strict";

const express = require("express");
const bodyParser = require("body-parser"); // Dùng để lấy các query VD: /user?id=7
const viewEngine = require('./config/viewEngine.js'); // Cách kiểm tra ta đã tới được file đó chưa giữ ctrl + trõ vô src của nó
const initWebRoutes = require('./route/web.js');
const dotenv = require('dotenv'); // hoặc require('dotenv').config();
const connection_database = require('./config/connectDB.js');
const initAPIRoutes = require('./route/API.js'); // Call APIs
const cors = require('cors');
let app = express();
app.use(cors({
  origin: true
}));
dotenv.config(); // config mới sử dụng được thằng process.env.PORT

connection_database(); // Kiểm tra xem đã connect tới server sql chưa && nhớ chú ý thứ tự xếp

//config app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// Limit image upload
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
viewEngine(app);
initWebRoutes(app);
initAPIRoutes(app);
let port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is running in http://localhost:".concat(port)));