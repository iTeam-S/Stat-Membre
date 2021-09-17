module.exports = app => {
    const Member = require("../controller/members");
  
    var router = require("express").Router();
  
    // Create a new Member
    router.post("/", Member.create);
  
    // Retrieve all Members
    router.get("/", Member.findAll);
  
  
    // Retrieve a single Member with id
    router.get("/:id", Member.findOne);
  
    // Update a Member with id
    router.put("/:id", Member.update);
  
    // Delete a Member with id
    router.delete("/:id", Member.delete);
  
    // delete all Member
    router.delete("/", Member.deleteAll);

  
    app.use('/api/members', router);
   
  };
  