'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Muốn add table thì đọc thêm ở query sequelize
        await queryInterface.createTable('markdowns', { // Coppy paste thì sửa
            // Ở user.js khai báo gì thì ở đây khái báo tương tự vậy
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            contentHTML: {
                type: Sequelize.TEXT('long'),
                allowNull: false,
            },
            contentMarkdown: {
                type: Sequelize.TEXT('long'),
                allowNull: false,
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT('long')
            },
            doctorId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            specialtyId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            clinicId: {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('markdowns');
    }
};