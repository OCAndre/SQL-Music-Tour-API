'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [{
      name: "Stage"

    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {})
  }
};

