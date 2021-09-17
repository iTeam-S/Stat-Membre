const { authJwt } = require("../middleware");
const controller = require("../controller/usercontroller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/content/all", controller.allAccess);

  app.get(
    "/api/content/user",
    [authJwt.verifyToken],
    controller.userBoard
  );


  app.get(
    "/api/content/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
/*ROUTES 
 
   /api/content/all  =le contenu public (sans login)
   /api/content/user  =l'interface pour les simples utulisateurs
   /api/content/admin =l'interface pour l'admin et admin seulement

*/