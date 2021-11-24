const db = require('../service/connect');


module.exports={
    createRole:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO role(name) values($1)",[name],(err,resultat)=>{
                if(err){
                    reject(new Error('Error while creating role'))
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
    getRoleUser:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT role.name as roles,users.prenom as username,users.email as user_mail FROM role LEFT JOIN user_role ON role.id=user_role.id_role LEFT JOIN users ON users.id=user_role.id_users WHERE role.name=$1",[name],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching roles"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getUserWithRoles:(email)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * from users WHERE email=$1",[email],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching user"));
                }else{
                    resolve(resultat)
                }
            });
        })

    },
    updateUserRole:(id,id_r,id_u)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE user_role SET id_role=$1,id_users=$2 WHERE id=$3",[id_r,id_u,id],(err,result)=>{
                if(err){
                    reject(new Error("Error while updating user_role"));
                }else{
                    resolve(result)
                }
            })
        })

    },
    checkRole:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM role WHERE name=$1",[name],(err,result)=>{
                if(err){
                    reject(new Error('Error while fetching role'))
                }else{
                    resolve(result)
                }
            })
        })
    }

}