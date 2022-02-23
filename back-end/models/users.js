const {db1 }= require('../service/connect');

module.exports={
   
    getOneUserM:(email,password)=>{
        return new Promise((resolve,reject)=>{
            db1.query("SELECT * FROM  membre WHERE mail =? AND password = SHA2(?, 256) ",[email,password],(err,resultat)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    checkUserByName:(prenom)=>{
        return new Promise((resolve,reject)=>{
            db1.query("SELECT * FROM membre WHERE prenom=?",[prenom],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching user"))
                }else{
                    resolve(resultat)
                }
            })
        })
    }
}