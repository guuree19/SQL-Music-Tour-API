'use strict';
const { DATATYPE} = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addcolumn('bands', 'recomendation', {
      type: DATATYPE.STRING
     })

  },

  down: async (queryInterface, Sequelize) =>{
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');

  }
};
