require('dotenv').config()
const { Pool } = require('pg')


const db = new Pool({
<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iteams',
=======
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
>>>>>>> 4079b51ebf848008e43e35f33ef44d88514138ec
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