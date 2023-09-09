'use strict';

require("core-js/modules/es.promise.js");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Muốn add table thì đọc thêm ở query sequelize
    await queryInterface.createTable('markdowns', {
      // Coppy paste thì sửa
      // Ở user.js khai báo gì thì ở đây khái báo tương tự vậy
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contentHTML: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      contentMarkdown: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      doctorId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      specialtyId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      clinicId: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('markdowns');
  }
};