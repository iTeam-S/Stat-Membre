require('dotenv').config()

const Pool=require("pg").Pool;


const db=new Pool({
    host: "localhost",
    database: "iteams",
    password: "vltn21/m",
    user: "postgres",
    port: 5432
})

db.connect((err) => {
    if (err) {
      console.log("Impossible de se connecter à la base de donnée");
      return;
    }
    console.log("Connexion à la base de donnée reussie");
  });

module.exports=db;
