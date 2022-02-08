const db = require('../service/connect');

module.exports = {
    create:(nom,prenom,user_github,fonction,pdc,mail,point_experience,password,role)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO membre(nom,prenom,user_github,fonction,pdc,mail,point_experience,password,role) values(?,?,?,?,?,?,?,?,?)",[nom,prenom,user_github,fonction,pdc,mail,point_experience,password,role],function(err,resultat){
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
            db.query("SELECT * FROM membre ORDER BY point_experience DESC", function(err, resultat){
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
            db.query("SELECT * FROM membre WHERE id = ?", [id] , function(err, resultat){
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
            db.query("SELECT * FROM membre WHERE nombre_projet IS NOT NULL", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching membre on project"));
                }else{
                  resolve(resultat)
                }
            })
        }) 

    },
    ValideMember:(difficulte, deadline, impact, implication,id_membre,id_projet)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE membre_projet SET difficulte =?, deadline=?, impact=?, implication=? WHERE id_membre=? AND id_projet=? AND difficulte IS NULL",[difficulte, deadline, impact, implication,id_membre,id_projet],function(err,resultat){
                if(err){
                    reject(new Error("Errer lors de validation de membre"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },

    getAllMemberProject:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT projet.nom as Nom_project,projet.repos as Repos_project,projet.delai as Delai_project,projet.delai,projet.valide,projet.total_participant FROM projet LEFT JOIN membre_projet ON projet.id=membre_projet.id_projet LEFT JOIN membre ON membre.id=membre_projet.id_membre  WHERE membre.id=?",[id],(err,result)=>{
                if(err){
                    reject(new Error("Projet du membre introuvable"))
                }else{
                    resolve(result)
                }
            })
        })

    },
    
    getTopFive:()=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT  id,nom ,membre.prenom,fonction,pdc,point_experience,nombre_projet FROM membre WHERE point_experience IS NOT NULL ORDER BY point_experience DESC    LIMIT 5",(err,resultat)=>{
                if(err){
                    reject(new Error("Error while fetching member"))
                }else{
                    resolve(resultat)
                }
            })
        })

    },
    getByprenom:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("select membre.pdc FROM membre WHERE membre.id=?",[id],function(error,res){
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
            db.query("SELECT membre.point_experience FROM membre WHERE membre.id=?",[id_m],(err,resultat)=>{
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
            db.query("UPDATE membre SET point_experience=?  WHERE membre.id=?",[point,id],(err,resultat)=>{
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
            db.query("UPDATE membre SET nombre_projet =? WHERE membre.id=?",[totproj,id],(err,resultat)=>{
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
            db.query("UPDATE membre SET nom =?,prenom=?,user_github=?,fonction=?,pdc=?,mail=?,admin=? WHERE id=?",[nom,prenom,user_github,fonction,pdc,mail,admin,id],function(err,resultat){
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
            db.query("DELETE  FROM membre WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while deleting membre"));
                }else{
                  resolve(resultat)
                } 
            })

    })
    }
}