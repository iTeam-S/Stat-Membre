const express=require('express');
const router=express.Router();
const Sequelize=require('sequelize');
const Project=require("../controller/projects")

  // Create a new Project
  router.post("/create", Project.create);

  // Retrieve all Project
  router.get("/allproject", Project.findAll);

  // Retrieve a single Project with id
  router.get("/findone/:id", Project.findOne);

  // Update a Project with id
  router.put("/update/:id", Project.update);

  // Delete a Project with id
  router.delete("/delete/:id", Project.delete);

  // Delete all Project
  router.delete("/delall", Project.deleteAll);


  module.exports=router;
