"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Huili",
        status: 1,
        role: 1,
      },
      {
        name: "test1",
        status: 2,
        role: 2,
      },
      {
        name: "test2",
        status: 3,
        role: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", {}, null);
  },
};
