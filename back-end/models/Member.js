const db = require('../service/connect');

module.exports = {
    create:(nom,prenom,user_github,fonction,pdc,mail,admin)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO members(nom,prenom,user_github,fonction,pdc,mail,admin) values($1,$2,$3,$4,$5,$6,$7)",[nom,prenom,user_github,fonction,pdc,mail,admin],function(err,resultat){
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
            db.query("SELECT * FROM members WHERE members.point_experience!=0 ORDER BY members.point_experience DESC ", function(err, resultat){
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
    getAllMemberProject:(membername)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT project.nom as Nom_project,project.repos as Repos_project,project.delai as Delai_project FROM project LEFT JOIN project_member ON project.id=project_member.id_project LEFT JOIN members ON members.id=project_member.id_member  WHERE members.nom=$1",[membername],(err,result)=>{
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
            db.query("SELECT  members.id,members.nom ,members.prenom,members.fonction,members.pdc,members.point_experience FROM members WHERE members.point_experience!=0 ORDER BY members.point_experience DESC    LIMIT 5",(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching member"))
                }else{
                    resolve(resultat)
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
            db.query("UPDATE members SET point_experience=$1 WHERE members.id=$2",[point,id],(err,resultat)=>{
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