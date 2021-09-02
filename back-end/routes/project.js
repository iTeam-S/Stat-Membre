const express = require("express");
const router=express.Router();


const ProjectCtrl=require('../controlleurs/projects');
const adminMidl=require('../middleware/auth');
const userMidl =require('../middleware/auth');

router.post('/',membreCtrl.createProject);
router.get('/',membreCtrl.getAllProject);
router.get('/:nom',membreCtrl.getOneProject);
router.put('/:nom',membreCtrl.updateProject);
router.delete('/:nom',membreCtrl.deleteProject);


module.exports=router;