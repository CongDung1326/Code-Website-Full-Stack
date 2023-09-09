'use strict';

require("core-js/modules/es.promise.js");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Muốn add table thì đọc thêm ở query sequelize
    await queryInterface.createTable('historys', {
      // Ở user.js khai báo gì thì ở đây khái báo tương tự vậy
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      files: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('historys');
  }
};