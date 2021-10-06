const db = require('../service/connect');


module.exports={
    createRole:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO role(name) values($1)",[description],(err,resultat)=>{
                if(err){
                    reject(new Error('Error while creating role'))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getUserRole:(name)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT role.name as roles,users.nom as username,users.mail as user_mail FROM roles LEFT JOIN user_role ON roles.id=user_role.id_role LEFT JOIN users ON users.id=user_role.id_users WHERE role.name=$1",[name],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching roles"))
                }else{
                    resolve(resultat)
                }
            })
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

    }

}
