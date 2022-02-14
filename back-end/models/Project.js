const {db2}= require('../service/connect');

module.exports = {
    create:(nom,repos,delai,pdc,valide)=>{
        return new Promise((resolve, reject) => {
        db2.query("INSERT INTO projet(nom,repos,delai,pdc,valide) values(?,?,?,?,?)",[nom,repos,delai,pdc,valide],function(err,resultat){
            if(err){
                reject(new Error(err));
            }else{
              resolve(resultat)
            }
        })
    })
    },
    checkProject:(nom)=>{
        return new Promise((resolve,reject)=>{ 
             db2.query("SELECT * FROM projet where nom=?",[nom],function(err,project){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(project)
                }

             })          
        })

    },
    CheckIfMemberIsOnProject:(member_id,project_id)=>{
        return new Promise((resolve,reject)=>{
            db2.query("SELECT ITEAMS.membre.nom, ITEAMS.membre.prenom FROM ITEAMS.membre LEFT JOIN STAT_MEMBRE.membre_projet ON ITEAMS.membre.id=STAT_MEMBRE.membre_projet.id_membre LEFT JOIN STAT_MEMBRE.projet ON STAT_MEMBRE.projet.id=STAT_MEMBRE.membre_projet.id_projet WHERE ITEAMS.membre.id=? AND STAT_MEMBRE.projet.id=?",[member_id,project_id],function(err,result){
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
            db2.query("INSERT INTO membre_projet(id_membre,id_projet) values(?,?)",[id_m,id_p],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                    resolve(resultat)
                }
            })

        })

    },
    getNombreDuMembreActif:()=>{
        return new Promise((resolve,reject)=>{
            db2.query("select distinct id_membre from membre_projet where difficulte IS NULL",function(err,resultat){
                if(err){
                    reject(new Error("Errer lors de fetching du nombre de membre actif"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getListProject: () => {
        return new Promise((resolve, reject) => {
            db2.query("SELECT * FROM projet", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        })  
    },
    ValideMember:(difficulte, deadline, impact, implication,id_membre,id_projet)=>{
        return new Promise((resolve,reject)=>{
            db2.query("UPDATE membre_projet SET difficulte =?, deadline=?, impact=?, implication=? WHERE id_membre=? AND id_projet=? AND difficulte IS NULL",[difficulte, deadline, impact, implication,id_membre,id_projet],function(err,resultat){
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getProjectTotalParticipants:(id)=>{
        return new Promise((resolve,reject)=>{
            db2.query("SELECT projet.total_participant FROM projet WHERE projet.id=?",[id],(err,resultat)=>{
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
            db2.query("SELECT ITEAMS.membre.id,ITEAMS.membre.nom as nom_participant, ITEAMS.membre.prenom as prenom_participant,ITEAMS.membre.pdc as pdc_participant,ITEAMS.membre.fonction,ITEAMS.membre.point_experience,ITEAMS.membre.user_github ,STAT_MEMBRE.projet.nom as Nom_project FROM ITEAMS.membre LEFT JOIN STAT_MEMBRE.membre_projet ON ITEAMS.membre.id=STAT_MEMBRE.membre_projet.id_membre LEFT JOIN STAT_MEMBRE.projet ON STAT_MEMBRE.projet.id=STAT_MEMBRE.membre_projet.id_projet WHERE projet.id=? ORDER BY ITEAMS.membre.point_experience DESC", [id],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }

            });

        })

    },
    getOneProjectWithPartV:(id)=>{
        return new Promise((resolve,reject)=>{
            db2.query("SELECT ITEAMS.membre.id,ITEAMS.membre.nom as nom_participant,ITEAMS.membre.prenom as prenom_participant,ITEAMS.membre.pdc as pdc_participant,ITEAMS.membre.fonction,ITEAMS.membre.point_experience,ITEAMS.membre.user_github,STAT_MEMBRE.projet.nom as Nom_project FROM ITEAMS.membre LEFT JOIN STAT_MEMBRE.membre_projet ON ITEAMS.membre.id=STAT_MEMBRE.membre_projet.id_membre LEFT JOIN STAT_MEMBRE.projet ON STAT_MEMBRE.projet.id=STAT_MEMBRE.membre_projet.id_projet WHERE STAT_MEMBRE.projet.id=? AND STAT_MEMBRE.membre_projet.difficulte IS NULL ORDER BY ITEAMS.membre.point_experience DESC", [id],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }

            });

        })

    },
    updateValideProject:(date,nb,id)=>{
        return new Promise((resolve,reject)=>{
            db2.query("UPDATE projet set validation_date=?,valide=? where id=?",[date,nb,id],function(err,resultat){
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    CountPointMembre:(id_projet)=>{
        return new Promise((resolve,reject)=>{
            db2.query("SELECT id_membre,difficulte,deadline,impact,implication,point_git FROM membre_projet where id_projet=?",[id_projet],function(err,resultat){
                if(err){
                    reject(new Error("Error while fetching critere"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getNombreEncoursPm:()=>{
        return new Promise((resolve,reject)=>{
            db2.query("select month(creation_date) as mois,count(nom) as projet  from STAT_MEMBRE.projet WHERE validation_date IS NULL GROUP BY month(creation_date)  ORDER BY mois ASC;",function(err,resultat) {
                if(err){
                    reject(new Error("Error while fetching nombre du projet"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getNombreValidePm:()=>{
        return new Promise((resolve,reject)=>{
            db2.query("select month(validation_date) as mois,count(nom)nombre_projet from projet WHERE validation_date IS NOT NULL GROUP BY month(validation_date)  ORDER BY mois ASC;",function(err,resultat) {
                if(err){
                    reject(new Error("Error while fetching nombre du projet"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },

    getNombreValide:()=>{
        return new Promise((resolve,reject)=>{
            db2.query("select count(nom) as nb_valide from projet WHERE valide=1;",function(err,resultat){
                if(err){
                    reject(new Error("Errer lors du fatching"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    getNombreEncours:()=>{
        return new Promise((resolve,reject)=>{
            db2.query("select count(nom) as nb_encours from projet WHERE valide!=1",function(err,resultat){
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
            db2.query("SELECT * FROM projet WHERE id = ?", [id] , function(err, resultat){
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
            db2.query("UPDATE projet SET total_participant=? WHERE projet.id=?",[nbpart,id_project],(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching participant"));
                }else{
                    resolve(resultat)
                }
            })

        })
    },
    updateProject:(nom,repos,delai,pdc,id)=>{
        return new Promise((resolve,reject)=>{
            db2.query("UPDATE projet SET nom =?,repos=?,delai=?,pdc=? WHERE id=?",[nom,repos,delai,pdc,id],function(err,resultat){
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
            db2.query("UPDATE projet SET valide=?,validation_date=? WHERE projet.id=?",[valide,date_validation,id],function(err,resultat){
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
            db2.query("DELETE  FROM projet  WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    getMembreTotalProject:(id)=>{
        return new Promise((resolve,reject)=>{
            db2.query("select count(id_membre) as nombre_projet from membre_projet WHERE id_membre=?",[id],function(err,resultat){
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    CheckProjectIfnotValidedYet:(id)=>{
       return new Promise((resolve,reject)=>{
           db2.query("SELECT valide FROM projet WHERE id=?",[id],function(err,resultat){
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
            db2.query("DELETE FROM membre_projet WHERE id_membre=? AND id_projet=?",[member_id,project_id],(err,resultat)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(resultat)
                }
            })
        })
    },

}
