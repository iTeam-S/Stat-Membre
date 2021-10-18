//Ecoute les requettes http
const http = require('http');
//Création application express
const app = require('./app');
//la fonction normalizePort renvoie un port valide, 
//qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

//Si la plateforme de déploiement propose un port par défaut, express l'utilise, sinon express utilise le port 3000
const port = normalizePort(process.env.APP_PORT);
app.set('port', port);

//la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. 
//Elle est ensuite enregistrée dans le serveur
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//Création serveur: createServer prend en argument l'application express qui reçoit le req et envoie le res
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);