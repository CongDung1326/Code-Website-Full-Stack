'use strict';

require("core-js/modules/es.promise.js");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Muốn add table thì đọc thêm ở query sequelize
    await queryInterface.createTable('schedules', {
      // Ở user.js khai báo gì thì ở đây khái báo tương tự vậy
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currentNumber: {
        type: Sequelize.INTEGER
      },
      maxNumber: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      timeType: {
        type: Sequelize.STRING
      },
      doctorId: {
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
    await queryInterface.dropTable('schedules');
  }
};