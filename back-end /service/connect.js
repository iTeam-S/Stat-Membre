require('dotenv').config()

const Pool=require("pg").Pool;


const db=new Pool({
     host: '127.0.0.1',
     user: 'postgres',
     password: 'Diamondra-10',
     database: 'iteams',
})

db.connect((err) => {
    if (err) {
      console.log("Impossible de se connecter à la base de donnée");
      return;
    }
    console.log("Connexion à la base de donnée reussie");
  });

module.exports=db;
