'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: "The Test",
      genre: "Experimental",
      available_start_time: "2022-01-01T19:00:00",
      end_time: "2022-01-01T20:30:00"

    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {})
  }
};
