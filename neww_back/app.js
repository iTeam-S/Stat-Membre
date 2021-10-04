const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//On crée l'application express
const app = express();
const db = require('./service/connect');

app.use((req, res, next) => {
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
app.use('/api/member',MembersRoutes );

const CriteresRoutes = require('./routes/critere');
app.use('/api/critere',CriteresRoutes );

/*const userRoutes = require('./routes/user');
app.use('/api/auth', userRoutes);
*/

const ProjectsRoutes = require('./routes/project');
app.use('/api/project', ProjectsRoutes);

module.exports = app;
