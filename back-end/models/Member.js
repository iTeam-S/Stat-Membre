const {db1} = require('../service/connect');

module.exports = {
    create:(nom,prenom,user_github,fonction,pdc,mail,point_experience,password,role)=>{
        return new Promise((resolve, reject) => {
        db1.query("INSERT INTO membre(nom,prenom,user_github,fonction,pdc,mail,point_experience,password,role) values(?,?,?,?,?,?,?,?,?)",[nom,prenom,user_github,fonction,pdc,mail,point_experience,password,role],function(err,resultat){
            if(err){
                  reject(new Error(err));
              }else{
                resolve(resultat)
              }
        })
    })
    },
    getListMember: () => {
        return new Promise((resolve, reject) => {
            db1.query("SELECT * FROM membre ORDER BY point_experience", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching iteams.membre"));
                }else{
                  resolve(resultat)
                }
            })
        })  
    },

    getOneMember: (id) => {
        return new Promise((resolve, reject) => {
            db1.query("SELECT * FROM membre WHERE id = ?", [id] , function(err, resultat){
              if(err){
                  reject(new Error("Errer resource while fetching iteams.membre"));
              }else{
                resolve(resultat)
              }
            })
        })
    },
    getAllMemberProject:(id)=>{
        return new Promise((resolve,reject)=>{
            db1.query("SELECT STAT_MEMBRE.projet.nom as Nom_project,STAT_MEMBRE.projet.repos as Repos_project,STAT_MEMBRE.projet.delai as Delai_project,STAT_MEMBRE.projet.delai,STAT_MEMBRE.projet.pdc,STAT_MEMBRE.projet.valide,STAT_MEMBRE.projet.total_participant FROM STAT_MEMBRE.projet LEFT JOIN STAT_MEMBRE.membre_projet ON STAT_MEMBRE.projet.id=STAT_MEMBRE.membre_projet.id_projet LEFT JOIN ITEAMS.membre ON ITEAMS.membre.id=STAT_MEMBRE.membre_projet.id_membre  WHERE ITEAMS.membre.id=?",[id],(err,result)=>{
                if(err){
                    reject(new Error("Projet du iteams.membre introuvable"))
                }else{
                    resolve(result)
                }
            })
        })

    },
    checkMember:(id_member)=>{
        return new Promise((resolve,reject)=>{
            db1.query("SELECT * FROM membre where id=?",[id_member],function(err,member){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(member)
                }
            })

        })

    },
    
    getTopFive:()=>{
        return new Promise((resolve,reject)=>{
            db1.query("SELECT  id,nom ,prenom_usuel,fonction,pdc,point_experience,user_github_pic,user_github FROM membre ORDER BY point_experience  LIMIT 5",(err,resultat)=>{
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
            db1.query("SELECT point_experience FROM  membre WHERE  id=?",[id_m],(err,resultat)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    setPoint:(point,id)=>{
        return new Promise((resolve,reject)=>{
            db1.query("UPDATE membre SET point_experience=?  WHERE membre.id=?",[point,id],(err,resultat)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    setTotproject:(totproj,id)=>{
        return new Promise((resolve,reject)=>{
            db1.query("UPDATE membre SET nombre_projet =? WHERE membre.id=?",[totproj,id],(err,resultat)=>{
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
            db1.query("UPDATE membre SET nom =?,prenom=?,user_github=?,fonction=?,pdc=?,mail=?,admin=? WHERE id=?",[nom,prenom,user_github,fonction,pdc,mail,admin,id],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while updating iteams.membre"));
                }else{
                  resolve(resultat)
                }
            })
        })

    },

    deleteMember:(id)=> {
        return new Promise((resolve, reject) => {
            db1.query("DELETE  FROM membre WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while deleting membre"));
                }else{
                  resolve(resultat)
                } 
            })

    })
    }
}