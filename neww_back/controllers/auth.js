const db = require('../service/connect');
const mdlsUser=require("../models/users");

var jwt=reqquire
var bcrypt=require("bcryptjs")
1


module.exports={
    signUp:async(req,res)=>{
        try {
            let nom=req.body.nom,mail=req.body.mail,hashPassword=bcrypt.hashSync(req.body.password,8);
            let user=await mdlsUser.create(nom,mail,hashPassword);
            res.status(200).send(user);
            
        } catch (error) {
            res.send(error)
            
        }
    },
    signin:async(req,res)=>{

    }
}

