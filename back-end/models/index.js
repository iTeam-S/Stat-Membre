const Sequelize=require("sequelize");
const db=require("../config/database");

db.user=require('../models/usermodels');
db.role=require('../models/rolemodels');

db.role.belongsToMany(db.user,{
    through:"user_roles",
    foreignKey:"roleId",
    otherKey:"userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });

db.ROLES = ["user", "admin"];

module.exports = db;
