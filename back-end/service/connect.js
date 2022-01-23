require('dotenv').config()
const { Pool } = require('pg')


const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("Erreur lors du connexion à la base de donnee");
    return;
  }
  console.log("Connexion à la base de donnée reussie");
});

module.exports = db;