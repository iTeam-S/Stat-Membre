'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('membres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_github: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fonction: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pdc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('membres');
  }
};