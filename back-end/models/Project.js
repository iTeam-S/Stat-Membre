const db = require('../service/connect');

module.exports = {
    create:(nom,repos,delai,id_critere,total_point,valide,creation_date)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO project(nom,repos,delai,id_critere,total_point,valide,creation_date) values(?,?,?,?,?,?,?)",[nom,repos,delai,id_critere,total_point,valide,creation_date],function(err,resultat){
            if(err){
                reject(new Error("Errer resource while creating project"));
            }else{
              resolve(resultat)
            }
        })
    })
    },
    checkProject:(nom_project)=>{
        return new Promise((resolve,reject)=>{ 
             db.query("SELECT * FROM project where nom=?",[nom_project],function(err,project){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(project)
                }

             })          
        })

    },
    checkMember:(nom_member)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM members where nom=?",[nom_member],function(err,member){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(member)
                }
            })

        })

    },
    CheckIfMemberIsOnProject:(membername,projectname)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT members.nom, members.prenom FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project WHERE members.nom=? AND project.nom=?",[membername,projectname],function(err,result){
                if(err){
                    reject(new Error("Errer lors du verification"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    addMemberToProject:(id_m,id_p)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO project_member(id_member,id_project) values(?,?)",[id_m,id_p],function(err,resultat){
                if(err){
                    reject(new Error("Errer while adding member to project"));
                }else{
                    resolve(resultat)
                }
            })

        })

    },
    getListProject: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM project", function(err, resultat){
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
            db.query("SELECT * FROM project WHERE project.valide ='false' ORDER BY creation_date DESC",(err,result)=>{
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
            db.query("SELECT * FROM project WHERE project.valide ='true'  ORDER BY validation_date DESC",(err,result)=>{
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
            db.query("SELECT members.nom as nom_participant, members.prenom as prenom_participant,members.pdc as pdc_participant,members.fonction as fonction_participant,project.nom as Nom_project,project.repos as Repos_project,project.delai as Delai_project,project.total_point,project.total_participant FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project",function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat);
                }

            });
            
            
        })
    },
    getProjectTotalParticipants:(nom_project)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT project.total_participant FROM project WHERE project.nom=?",[nom_project],(err,resultat)=>{
                if(err){
                    reject(new Error("Errer while fetching project"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getOneProjectWithPart:(projectname)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT members.id,members.nom as nom_participant, members.prenom as prenom_participant,members.pdc as pdc_participant,members.point_experience,members.nombre_projet,project.nom as Nom_project FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project WHERE project.nom=?",[projectname],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }

            });

        })

    },
    getOneProjectWithPartById:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT members.id,members.nom as nom_participant, members.prenom as prenom_participant,members.pdc as pdc_participant,members.point_experience,members.nombre_projet,project.nom as Nom_project FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project WHERE project.id=?",[id],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }

            });

        })

    },
    getAllProjectCritere:()=>{
        return new Promise((resolve, reject) => {
            db.query("SELECT project.id,project.nom as Project_name,project.repos as Project_repos,project.delai as Project_delai,project.total_point,project.total_participant,critere.difficulte,critere.deadline,critere.impact,critere.implication,critere.point_git,project.nom as Project_name,project.repos as Project_repos,project.delai as Project_delai FROM critere LEFT JOIN project ON  critere.id=project.id_critere", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        }) 
    },
    listAllvalidedProject:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM project WHERE project.valide='true'",function(err,resultat){
                if(err){
                    reject(new Error("Error while fetching project"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },
    getOneProjectCritere:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("SELECT critere.difficulte,critere.deadline,critere.impact,critere.implication,critere.point_git,project.nom as Project_name,project.repos as Project_repos,project.delai as Project_delai FROM critere LEFT JOIN project ON  critere.id=project.id_critere WHERE project.id=?",[id], function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        }) 
    },
    getOneProject: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM project WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    setParticipant:(nbpart,nom_project)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE project SET total_participant=? WHERE project.nom=?",[nbpart,nom_project],(err,resultat)=>{
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
            db.query("UPDATE project SET nom =?,repos=?,delai=? WHERE id=?",[nom,repos,delai,id],function(err,resultat){
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
            db.query("UPDATE project SET valide=?,validation_date=? WHERE project.id=?",[valide,date_validation,id],function(err,resultat){
                if(err){
                    reject(new Error("Error while insert data")) 
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    deleteProject:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM project CASCADE WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while dropping project"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    GetPoint:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("select total_point from project WHERE id=?",[id],function(err,result){
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
           db.query("SELECT valide FROM project WHERE id=?",[id],function(err,resultat){
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
            db.query("DELETE FROM project_member WHERE id_member=? AND id_project=?",[member_id,project_id],(err,resultat)=>{
                if(err){
                    reject(new Error("Errer lors du verification du membres du projets"))
                }else{
                    resolve(resultat)
                }
            })
        })
    },

}
