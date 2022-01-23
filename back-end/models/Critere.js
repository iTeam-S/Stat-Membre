const db = require('../service/connect');

module.exports = {
    create:(difficulte,deadline,impact,implication,point_git)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO critere(difficulte,deadline,impact,implication,point_git) values(?,?,?,?,?)",[difficulte,deadline,impact,implication,point_git],function(err,resultat){
            if(err){
                reject(new Error("Errer resource while creating critere"));
            }else{
              resolve(resultat)
            }
        })
    })
    },
    getListCritere: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM critere ORDER BY id DESC", function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching critere "));
                }else{
                  resolve(resultat)
                }
            })
        })
    },

    getOneCritere: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM critere WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching critere "));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    updateCritere:(difficulte,deadline,impact,implication,point_git,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE critere SET difficulte=?,deadline=?,impact=?,implication=?,point_git=? WHERE id=?",[difficulte,deadline,impact,implication,point_git,id],function(err,resultat){
                if(err){
                    reject(new Error("Errer resource while updating critere "));
                }else{
                  resolve(resultat)
                }
            })
            
        })

    },
    deleteCritere:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM critere WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while dropping critere "));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}