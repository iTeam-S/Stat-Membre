const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//On crée l'application express
const app = express();
const db = require('./service/connect');

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  //d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Origin', '*');
  //d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//body-parser analyse le corps de la demande
app.use(bodyParser.json());
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

const MembersRoutes = require('./routes/member');
app.use('/api/v1/member',MembersRoutes );

const CriteresRoutes = require('./routes/critere');
app.use('/api/v1/critere',CriteresRoutes );

const ProjectsRoutes = require('./routes/project');
app.use('/api/v1/project', ProjectsRoutes);


const userRoutes = require('./routes/authroutes');
app.use('/api/v1/auth', userRoutes);


const rolesRoutes=require('./routes/role');
app.use('/api/v1/role',rolesRoutes)


module.exports = app;
