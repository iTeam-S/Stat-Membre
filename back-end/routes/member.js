const express=require("express");
const router=express.Router();
const db=require('../config/database');
const Member=require('../controller/members');

// Create a new Member
router.post("/create", Member.create);

// Retrieve all Member
router.get("/allmember", Member.findAll);

// Retrieve a single Member with id
router.get("/findone/:id",Member.findOne);

// Update a Member with id
router.put("/update/:id", Member.update);

// Delete a Member with id
router.delete("/delete/:id", Member.delete);

// Delete all Member
router.delete("/delall", Member.deleteAll);



module.exports=router;
