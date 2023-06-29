'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{ // Sửa lại tương tự như file user.js
      email: 'admin@gmail.com',
      password: '123456', // -> plain text | lkajslfjaslfo12j489 -> hash password 
      firstName: 'Don Vau',
      lastName: 'Cong Dung',
      address: 'USA',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
