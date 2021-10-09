db.query("SELECT members.nom, members.prenom,members.pdc,members.fonction FROM members LEFT JOIN project_member ON members.id=project_member.id_member LEFT JOIN project ON project.id=project_member.id_project",function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while fetching project"));
                }else{
                  resolve(resultat)
                }

            });