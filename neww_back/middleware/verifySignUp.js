const db=require("../service/connect");
const mdlsUser=require("../models/users");
const mdlsRole=require("../models/roles");

module.exports={
    checkName:async(req,res)=>{
        try {
            let name=req.body.name;
            let userBn=await mdlsUser.checkUserByName(name)
            if(userBn){
                res.send({
                    message:"Name already in use,chose other name please"
                })
            }   
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    checkMail:async(req,res)=>{
        try {
            let mail=req.body.mail;
            let userBm=await mdlsUser.checkUserByMail(mail)
            if(userBm){
                res.send({
                    message:"Mail is already in use,please ease other mail"
                })
            }    
        } catch (error) {
            res.status(500).send(error)
            
        }
    }
}


