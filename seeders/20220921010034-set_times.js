'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      event_id: "1",
      stage_id: "1",
      band_id: "5",
      start_time: "2022-01-01T19:00:00",
      end_time: "2022-01-01T20:30:00"

    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {})
  }
};
