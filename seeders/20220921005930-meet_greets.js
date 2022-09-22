'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greets', [{
      event_id: "1",
      band_id: "5",
      meet_start_time: "2022-01-01T19:00:00",
      meet_end_time: "2022-01-01T20:30:00"

    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meet_greets', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
