'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('User',
      [
        {
          email: 'John Doe1',
          password: '123456',
          userName: 'fake1'
        },
        {
          email: 'John Doe2',
          password: '123456',
          userName: 'fake2'
        },
        {
          email: 'John Doe3',
          password: '123456',
          userName: 'fake3'
        },
      ], {});
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
