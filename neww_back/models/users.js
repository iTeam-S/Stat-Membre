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
    getOneUser:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE id=$1",[id],(err,resultat)=>{
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
    giveRoleToUser:(id_u,id_r)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO user_role(id_users,id_role) values($1,$2)",[id_u,id_r],(err,result)=>{
                if(err){
                    reject(new Error("Error while asigning role to user"))
                }else{
                    resolve(result)
                }
            })
        })

    },
    findUserByName:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE nom=$1",[name],(err,result)=>{
                if(err){
                    reject(new Error("Error while fetching this user"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    getUserWithRoles:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT users.nom as username,users.mail as user_mail,users.password as user_password,roles.nom as user_role FROM users LEFT JOIN roles ON users.id=user_role.id_users LEFT JOIN roles ON roles.id=user_role.id_role WHERE users.id=$1",[name],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching user"));
                }else{
                    resolve(resultat)
                }
            });
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
