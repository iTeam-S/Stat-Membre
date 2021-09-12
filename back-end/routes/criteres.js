const express=require("express");
const router=express.Router();
const db=require('../config/database');
const criteres=require('../controller/criteres');

// Create criteres
router.post("/", criteres.create);

// Retrieve all criteres
router.get("/", criteres.findAll);

// Retrieve a single criteres with id
router.get("/:id", criteres.findOne);

// Update a Tutorial with id
router.put("/:id", criteres.update);

// Delete a Tutorial with id
router.delete("/:id", criteres.delete);

// Delete all Tutorials
router.delete("/", criteres.deleteAll);


module.exports=router;