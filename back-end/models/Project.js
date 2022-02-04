const db = require('../service/connect');

module.exports = {
    create:(nom,repos,delai,valide)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO projet(nom,repos,delai,valide) values(?,?,?,?)",[nom,repos,delai,valide],function(err,resultat){
            if(err){
                reject(new Error(err));
            }else{
              resolve(resultat)
            }
        })
    })
    },
    checkProject:(id)=>{
        return new Promise((resolve,reject)=>{ 
             db.query("SELECT * FROM projet where id=?",[id],function(err,project){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(project)
                }

             })          
        })

    },
    checkMember:(id_member)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM membre where id=?",[id_member],function(err,member){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(member)
                }
            })

        })

    },
    CheckIfMemberIsOnProject:(member_id,project_id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT membre.nom, membre.prenom FROM membre LEFT JOIN membre_projet ON membre.id=membre_projet.id_membre LEFT JOIN projet ON projet.id=membre_projet.id_projet WHERE membre.id=? AND projet.id=?",[member_id,project_id],function(err,result){
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    addMemberToProject:(id_m,id_p)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO membre_projet(id_membre,id_projet) values(?,?)",[id_m,id_p],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                    resolve(resultat)
                }
            })

        })

    },
    getListProject: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM projet", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        })  
    },
    listAllnodeploye:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM projet WHERE projet.valide ='false' ORDER BY creation_date DESC",(err,result)=>{
                if(err){
                    reject (new Error("Errer resource while fetching no_deployed project"))
                }else{
                    resolve(result)
                }
            })
        })
        
    },
    listAlldeploye:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM projet WHERE projet.valide ='true'  ORDER BY validation_date DESC",(err,result)=>{
                if(err){
                    reject (new Error("Errer resource while fetching no_deployed project"))
                }else{
                    resolve(result)
                }
            })
        })
        
    },
    getProjectMember:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT membre.nom as nom_participant, membre.prenom as prenom_participant,membre.pdc as pdc_participant,membre.fonction as fonction_participant,projet.nom as Nom_project,projet.repos as Repos_project,projet.delai as Delai_project,projet.total_point,projet.total_participant FROM membre LEFT JOIN membre_projet ON membre.id=membre_projet.id_membre LEFT JOIN projet ON projet.id=membre_projet.id_projet",function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat);
                }

            });
            
            
        })
    },
    getProjectTotalParticipants:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT projet.total_participant FROM projet WHERE projet.id=?",[id],(err,resultat)=>{
                if(err){
                    reject(new Error("Errer while fetching project"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getOneProjectWithPart:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT membre.id,membre.nom as nom_participant, membre.prenom as prenom_participant,membre.pdc as pdc_participant,membre.point_experience,membre.nombre_projet,projet.nom as Nom_project FROM membre LEFT JOIN membre_projet ON membre.id=membre_projet.membre LEFT JOIN projet ON projet.id=membre_projet.projet WHERE projet.id=?", [id],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }

            });

        })

    },
    
    listAllvalidedProject:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM projet WHERE projet.valide=1",function(err,resultat){
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getOneProject: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM projet WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    setParticipant:(nbpart,id_project)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE projet SET total_participant=? WHERE projet.id=?",[nbpart,id_project],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching participant"));
                }else{
                    resolve(resultat)
                }
            })

        })
    },
    updateProject:(nom,repos,delai,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE projet SET nom =?,repos=?,delai=? WHERE id=?",[nom,repos,delai,id],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while updating project"));
                }else{
                  resolve(resultat)
                }
            })
            
        })

    },
    valideProject:(valide,date_validation,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE projet SET valide=?,validation_date=? WHERE projet.id=?",[valide,date_validation,id],function(err,resultat){
                if(err){
                    reject(new Error(err)) 
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    deleteProject:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM projet  WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    GetPoint:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("select total_point from projet WHERE id=?",[id],function(err,result){
                if(err){
                    reject(new Error("Error while getting point"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    CheckProjectIfnotValidedYet:(id)=>{
       return new Promise((resolve,reject)=>{
           db.query("SELECT valide FROM projet WHERE id=?",[id],function(err,resultat){
               if(err){
                   reject(new Error("Errer lors du verification du projet"))
               }else{
                   resolve(resultat)
               }
           })
       })                                                                                                                     
    },
    deleteProjectMember:(member_id,project_id)=>{
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM membre_projet WHERE membre=? AND projet=?",[member_id,project_id],(err,resultat)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })
    },

}
