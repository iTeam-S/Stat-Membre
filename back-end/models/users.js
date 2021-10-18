const db = require('../service/connect');

module.exports={
    create:(prenom,mail,password)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO users(prenom,email,password) values($1,$2,$3)",[prenom,mail,password],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while creating user"));
                }else{
                    resolve(resultat);
                }
            })
        })
    },
    fetchUser:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * from users",(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching users"))
                }else{
                    resolve(resultat)
                }

            })
        })

    },
    getOneUser:(prenom)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE prenom=$1",[prenom],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching user"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    checkUserByName:(prenom)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE prenom=$1",[prenom],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching user"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    checkUserByMail:(mail)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE email=$1",[mail],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching user"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    updateUser:(prenom,mail,password,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE users SET nom=$1,email=$2,password=$3 WHERE id=$4",[prenom,mail,password,id],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while updating user"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    deleteUser:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM users WHERE id=$1",[id],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while deleting member"))
                }else{
                    resolve(resultat)
                }
            })
        })
    }
}