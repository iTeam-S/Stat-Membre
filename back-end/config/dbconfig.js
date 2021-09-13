
//---------------------database model config--------------------
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "vltn21/m",
    DB: "iteams",
    dialect: "postgres",

    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  