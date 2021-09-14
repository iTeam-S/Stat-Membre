const dbConfig = require("../config/dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  define:{
    timestamps: false,
    freezeTableName: true
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.membre = require("./Member.js")(sequelize, Sequelize);
db.critere = require("./Criteres.js")(sequelize, Sequelize);
db.project = require("./Project.js")(sequelize, Sequelize);
db.user = require("../models/usermodels")(sequelize, Sequelize);
db.role = require("../models/rolemodels")(sequelize, Sequelize);

//Relation entre table membre et project

/*db.membre.belongsToMany(db.project,{
  through:'ProjectMember',

});
db.project.belongsToMany(db.membre,{
  through:'ProjectMember',
  
});

*/
// relation entre table project et ses criteres

db.project.hasOne(db.critere)

db.critere.belongsTo(db.project)

/*
db.project.hasOne(db.critere);
db.critere.belongsTo(db.project);
*/


//relation betwen users and his roles
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin"];




module.exports = db;
