const router=require('express').Router();
const pool=require("../db");
const bcrypt=require('bcrypt');
const jwtGenerator=require("../utils/jwt");
const validInfo=require("../middleware/validinfo");

router.post("/register",validInfo,authCtrl.register);
router.post("/login",validInfo,authCtrl.login);




module.exports=router;
