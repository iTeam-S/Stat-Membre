require('dotenv').config()


<<<<<<< HEAD
const db=new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    port: 5432,
})
=======

const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
>>>>>>> 51e4073a9525262cf5d69782410bf62b55691743

db.connect((err) => {
  if (err) {
    console.log("Errer lors du connexion à la base de donnee");
    return;
  }
  console.log("Connexion à la base de donnée reussie");
});

module.exports = db;