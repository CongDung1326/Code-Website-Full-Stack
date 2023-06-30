'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{ // Sửa lại tương tự như file user.js
      email: 'admin@gmail.com',
      password: '123456', // -> plain text | lkajslfjaslfo12j489 -> hash password 
      firstName: 'Don Vau',
      lastName: 'Cong Dung',
      address: 'USA',
      phoneNumber: '303206541654',
      gender: 1,
      image: 'abcxyz',
      roleId: 'R1',
      positionId: 'abcxyz',
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
