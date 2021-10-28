require('dotenv').config()

const Pool=require("pg").Pool;


const db=new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
})

db.connect((err) => {
    if (err) {
      console.log("Impossible de se connecter à la base de donnée");
      return;
    }
    console.log("Connexion à la base de donnée reussie");
  });

module.exports=db;
