const db = require('../service/connect');

module.exports = {
    create:(nom,repos,delai,id_critere)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO project(nom,repos,delai,id_critere) values($1,$2,$3,$4)",[nom,repos,delai,id_critere],function(err,resultat){
            if(err){
                reject(new Error("Errer resource while creating project"));
            }else{
              resolve(resultat)
            }
        })
    })
    },
    checkProject:(id_project)=>{
        return new Promise((resolve,reject)=>{ 
             db.query("SELECT * FROM project where id=$1",[id_project],function(err,project){
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
            db.query("SELECT * FROM members where id=$1",[id_member],function(err,member){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(member)
                }
            })

        })

    },
    addMemberToProject:(id_m,id_p)=>{
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO project_member(id_member,id_project) values($1,$2)",[id_m,id_p],function(err,resultat){
                if(err){
                    reject(new Error("Errer while adding member to project"));
                }else{
                    resolve(resultat)
                    //Many-to-Many relation
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
    getProjectMember:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT members.nom as nom_participant, members.prenom as prenom_participant,members.pdc as pdc_participant,members.fonction as fonction_participant,project.nom as Nom_project,project.repos as Repos_project,project.delai as Delai_project FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project",function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }

            });
            
            
        })
    },
    getOneProjectWithPart:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT members.nom as nom_participant, members.prenom as prenom_participant,members.pdc as pdc_participant,members.fonction as fonction_participant,project.nom as Nom_project,project.repos as Repos_project,project.delai as Delai_project FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project WHERE project.id=$1",[id],function(err,resultat){
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
            db.query("SELECT critere.difficulte,critere.deadline,critere.impact,critere.implication,critere.point_git,project.nom as Project_name,project.repos as Project_repos,project.delai as Project_delai FROM critere LEFT JOIN project ON  critere.id=project.id_critere", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        }) 
    },
    getOneProjectCritere:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("SELECT critere.difficulte,critere.deadline,critere.impact,critere.implication,critere.point_git,project.nom as Project_name,project.repos as Project_repos,project.delai as Project_delai FROM critere LEFT JOIN project ON  critere.id=project.id_critere WHERE project.id=$1",[id], function(err, resultat){
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
            db.query("SELECT * FROM project WHERE id = $1", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    updateProject:(nom,repos,delai,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE project SET nom =$1,repos=$2,delai=$3 WHERE id=$4",[nom,repos,delai,id],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while updating project"));
                }else{
                  resolve(resultat)
                }
            })
            
        })

    },
    deleteProject:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM project WHERE id = $1", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while dropping project"));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}
