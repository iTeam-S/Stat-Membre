const express = require("express");
const router=express.Router();


const ProjectCtrl=require('../controlleurs/projects');
const adminMidl=require('../middleware/auth');
const userMidl =require('../middleware/auth');

router.post('/',ProjectCtrl.createProject);
router.get('/',ProjectCtrl.getAllProject);
router.get('/:nom',ProjectCtrl.getOneProject);
router.put('/:nom',ProjectCtrl.updateProject);
router.delete('/:nom',ProjectCtrl.deleteProject);


module.exports=router;
