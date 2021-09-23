
//---------------------database model config--------------------
module.exports = {
    HOST:"localhost"/*process.env.DB_HOSTNAME*/,
    USER: "postgres"/*process.env.DB_USERNAME*/,
    PASSWORD:"Diamondra_10"/*process.env.DB_PASSWORD*/,
    DB: "iteams"/*process.env.DB_NAME*/,
    dialect: "postgresql",

    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
