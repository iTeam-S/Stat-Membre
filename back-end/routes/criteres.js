module.exports = app => {
    const Critere = require("../controller/criteres");
  
    var router = require("express").Router();
  
    // Create a new project_criteres
    router.post("/", Critere.create);
  
    // Retrieve all projects_criteres
    router.get("/", Critere.findAll);
  
    // Retrieve a single projects_criteres with id
    router.get("/:id", Critere.findOne);
  
    // Update a projects_criteres with id
    router.put("/:id", Critere.update);
  
    // Delete a projects_criteres with id
    router.delete("/:id", Critere.delete);
  
    //delete all projects_criteres
    router.delete("/", Critere.deleteAll);
  
    app.use('/api/criteres', router);
   
  };