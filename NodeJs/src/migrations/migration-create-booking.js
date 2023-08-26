'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Muốn add table thì đọc thêm ở query sequelize
        await queryInterface.createTable('bookings', {
            // Ở user.js khai báo gì thì ở đây khái báo tương tự vậy
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            statusId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            patientId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            date: {
                type: Sequelize.STRING
            },
            timeType: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('bookings');
    }
};