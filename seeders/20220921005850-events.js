'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      name: "Tulsa",
      date: "2022-01-01T19:00:00",
      start_time: "2022-01-01T19:00:00",
      end_time: "2022-01-01T20:30:00"

    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
