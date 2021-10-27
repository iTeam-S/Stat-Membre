require('dotenv').config()

const Pool=require("pg").Pool;


const db=new Pool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if (err) {
      console.log("Impossible de se connecter à la base de donnée");
      return;
    }
    console.log("Connexion à la base de donnée reussie");
  });

module.exports=db;
