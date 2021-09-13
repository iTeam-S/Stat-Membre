
//---------------------database model config--------------------
module.exports = {
    HOST: "iteam-s.mg",
    USER: app.env('USER_POSTGRES'),
    PASSWORD: app.env('password',
    DB: "iteams",
    dialect: "postgres",

    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
