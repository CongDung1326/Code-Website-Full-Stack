const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql', // Sử dụng kết nối với mysql
    logging: false // Dùng để tắt đi dòng (Executing (default): SELECT 1+1 AS result)
});

const connection_database = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connection_database; // Check database đã kết nối thành công chưa