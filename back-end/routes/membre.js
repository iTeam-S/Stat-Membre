const express = require("express");
const router=express.Router();


const membreCtrl=require('../controlleurs/membre');
const adminMidl=require('../middleware/auth');
const userMidl =require('../middleware/auth');

router.post('/',membreCtrl.createMembre);
router.get('/',membreCtrl.getAllmembre);
router.get('/:prenom',membreCtrl.getOneMember);
router.put('/:prenom',membreCtrl.updateMember);
router.delete('/:prenom',membreCtrl.deleteMember);


module.exports=router;

