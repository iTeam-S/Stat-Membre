require('dotenv').config()
const { Pool } = require('pg')


const db = new Pool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iteams',
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