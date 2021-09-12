const Sequelize=require('sequelize')
const db=require("../config/database");

const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  module.exports=Role;