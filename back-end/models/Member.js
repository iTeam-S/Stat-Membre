const db = require('../service/connect');

module.exports = {
    create:(nom,prenom,user_github,fonction,pdc,mail,admin,point_experience)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO members(nom,prenom,user_github,fonction,pdc,mail,admin,point_experience) values($1,$2,$3,$4,$5,$6,$7,$8)",[nom,prenom,user_github,fonction,pdc,mail,admin,point_experience],function(err,resultat){
            if(err){
                  reject(new Error("Errer resource while fetching membre"));
              }else{
                resolve(resultat)
              }
        })
    })
    },
    getListMember: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM members", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching membre"));
                }else{
                  resolve(resultat)
                }
            })
        })  
    },

    getOneMember: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM members WHERE id = $1", [id] , function(err, resultat){
              if(err){
                  reject(new Error("Errer resource while fetching membre"));
              }else{
                resolve(resultat)
              }
            })
        })
    },
    getmemberonproject:()=>{
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM members WHERE nombre_projet!=0", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching membre on project"));
                }else{
                  resolve(resultat)
                }
            })
        }) 

    },
    getAllMemberProject:(membername)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT project.nom as Nom_project,project.repos as Repos_project,project.delai as Delai_project,project.total_point as point,project.delai,project.valide,project.creation_date FROM project LEFT JOIN project_member ON project.id=project_member.id_project LEFT JOIN members ON members.id=project_member.id_member  WHERE members.nom=$1",[membername],(err,result)=>{
                if(err){
                    reject(new Error("Error while fetching member'project"))
                }else{
                    resolve(result)
                }
            })
        })

    },
    
    getTopFive:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT  members.id,members.nom ,members.prenom,members.fonction,members.pdc,members.point_experience,members.nombre_projet FROM members WHERE members.point_experience!=0 ORDER BY members.point_experience DESC    LIMIT 5",(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching member"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    getByprenom:(prenom)=>{
        return new Promise((resolve,reject)=>{
            db.query("select members.pdc FROM members WHERE members.prenom=$1",[prenom],function(error,res){
                if(error){
                    reject(new Error("Error while fetching member"))
                }else{
                    resolve(res)
                }
            })
        })
    },
    getPoint:(id_m)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT members.point_experience FROM members WHERE members.id=$1",[id_m],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching point_experience"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    setPoint:(point,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE members SET point_experience=$1  WHERE members.id=$2",[point,id],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while updating member_point"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    setTotproject:(totproj,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE members SET nombre_projet =$1 WHERE members.id=$2",[totproj,id],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while updating member_point"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },

    updateMember:(nom,prenom,user_github,fonction,pdc,mail,admin,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE members SET nom =$1,prenom=$2,user_github=$3,fonction=$4,pdc=$5,mail=$6,admin=$7 WHERE id=$8",[nom,prenom,user_github,fonction,pdc,mail,admin,id],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while updating membre"));
                }else{
                  resolve(resultat)
                }
            })
        })

    },

    deleteMember:(id)=> {
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM members WHERE id = $1", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while deleting membre"));
                }else{
                  resolve(resultat)
                } 
            })

    })
    }
}