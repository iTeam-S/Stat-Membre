module.exports = app => {
    const Project = require("../controller/projects");
  
    var router = require("express").Router();
  
    // Create a new Project
    router.post("/", Project.create);
  
    // Retrieve all projects
    router.get("/", Project.findAll);
 
  
    // Retrieve a single project with id
    router.get("/:id", Project.findOne);
  
    // Update a project with id
    router.put("/:id", Project.update);
  
    // Delete a project with id
    router.delete("/:id", Project.delete);
  
    // delete all project
    router.delete("/", Project.deleteAll);
    
    router.post('/add',Project.addMemberToProject);
  
    app.use('/api/projects', router);
   
  };
