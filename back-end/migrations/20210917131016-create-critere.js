'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('criteres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      difficulte:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deadline:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      impact:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      implication:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      point_git:{
          type:Sequelize.INTEGER,
          allowNull: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('criteres');
  }
};
