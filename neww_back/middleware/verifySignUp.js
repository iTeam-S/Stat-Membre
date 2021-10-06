const db=require("../service/connect");
const mdlsUser=require("../models/users");
const mdlsRole=require("../models/roles");

module.exports={
    checkMail:async(req,res,next)=>{
        try {
            let mail=req.body.email;
            let userBm=await mdlsUser.checkUserByMail(mail)
            if(userBm){
                res.send({
                    message:"Mail is already in use,please use other mail"
                })
            }else{
                next();
            }
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    checkName:async(req,res,next)=>{
        try {
            let name=req.body.prenom;
            let userBn=await mdlsUser.checkUserByName(name)
            if(userBn){
                res.send({
                    message:"Name already in use,chose other name please"
                })
            }else{
                next();

            }  
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
}


