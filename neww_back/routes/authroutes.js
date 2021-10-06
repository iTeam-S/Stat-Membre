const verifySignUp=require("../middleware/verifySignUp")
const userCtrl=require('../controllers/auth')
const express=require("express")
const router=express.Router()


    router.post("/signup",[verifySignUp.checkMail,verifySignUp.checkName],userCtrl.signUp);

    router.post('/signin',userCtrl.signin)

    module.exports=router;
