"use strict";

require("core-js/modules/es.promise.js");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('donvau', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  // Sử dụng kết nối với mysql
  logging: false // Dùng để tắt đi dòng (Executing (default): SELECT 1+1 AS result)
});

const connection_database = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
module.exports = connection_database; // Check database đã kết nối thành công chưa