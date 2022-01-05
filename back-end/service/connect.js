require('dotenv').config()

const Pool=require("pg").Pool;

const db=new Pool({
<<<<<<< HEAD
    host: '127.0.0.1',
    database: 'iteams',
    password: '1404',
    user: 'postgres',
    port: 5432,
=======
   host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
>>>>>>> 5fce297864ba7685741f95d1cada067052e2483e
})

db.connect((err) => {
    if (err) {
      console.log("Impossible de se connecter à la base de donnée");
      return;
    }
    console.log("Connexion à la base de donnée reussie");
  });

module.exports=db;
