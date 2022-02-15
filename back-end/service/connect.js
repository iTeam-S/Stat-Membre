require('dotenv').config()



const mysql = require("mysql");
const db={
  db1:mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
   
  }),
  db2:mysql.createConnection({
    host: process.env.DB_HOST2,
    user: process.env.DB_USER2,
    password: process.env.DB_PASSWORD2,
    database: process.env.DB_NAME2,
   
  }),

}


db.db1.connect((err) => {
  if (err) {
    console.log("Erreur lors de connexion à la base de donnee ITEAMS");
    return;
  }
  console.log("Connexion à la base de donnée  ITEAMS reussie");
});
db.db2.connect((err) => {
  if (err) {
    console.log("Erreur lors de connexion à la base de donnee MEMBRE_STAT");
    return;
  }
  console.log("Connexion à la base MEMBRE_STAT de donnée reussie");
});

module.exports = db;