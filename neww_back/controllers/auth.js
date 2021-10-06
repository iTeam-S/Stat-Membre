const db = require('../service/connect');
const mdlsUser=require("../models/users");

var jwt=require("jsonwebtoken")
var bcrypt=require("bcryptjs");

module.exports={
    signUp:async(req,res)=>{
        try {
            let nom=req.body.prenom;mail=req.body.email,hashPassword=bcrypt.hashSync(req.body.password,8);

            
            let useR=await mdlsUser.create(nom,mail,hashPassword);
          

            res.json(useR.rows[0]);
            
            
        } catch (error) {
            res.send(error)
            
        }
    },
    signin:async(req,res)=>{
        try {
            let nom=req.body.nom;
            let useR=await mdlsUser.getUserWithRole(nom);

            if(!useR){
                return res.status(404).send({
                    message:"User Not found."
                })
            }
            var passwordIsValid=bcrypt.compareSync(
                    req.body.password,
                    useR.user_password

                );
                if(!passwordIsValid){
                    return res.status(401).send({
                        accessToken:null,
                        message:"Invalid password"
                    });
                }
            var token =jwt.sign({id:useR.id},config.secret,{
                expiresIn:86400
            });
            res.status(200).send({
                id:useR.id,
                username:useR.username,
                email:useR.user_mail,
                roles:useR.user_role,
                accessToken:token
            });
            
        } catch (error) {
            res.status(500).send(error)
            
        }

    }
}


