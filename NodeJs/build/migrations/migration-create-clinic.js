'use strict';

require("core-js/modules/es.promise.js");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Muốn add table thì đọc thêm ở query sequelize
    await queryInterface.createTable('clinics', {
      // Ở user.js khai báo gì thì ở đây khái báo tương tự vậy
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB('long')
      },
      descriptionHTML: {
        type: Sequelize.TEXT('long')
      },
      descriptionMarkdown: {
        type: Sequelize.TEXT('long')
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
    await queryInterface.dropTable('clinics');
  }
};