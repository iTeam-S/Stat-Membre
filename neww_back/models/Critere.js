const db = require('../service/connect');

module.exports = {
    create:(difficulte,deadline,impact,implication,point_git)=>{
        return new Promise((resolve, reject) => {
        db.query("INSERT INTO critere(difficulte,deadline,impact,implication,point_git) values($1,$2,$3,$4,$5)",[difficulte,deadline,impact,implication,point_git],function(err,resultat){
            if(err){
                reject(new Error("Errer resource while creating critere"));
            }else{
              resolve(resultat)
            }
        })
    })
    },
    checkCritere:(req,res)=>{
        try {
            return new Promise((resolve,reject)=>{

            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        

    },
    getListCritere: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM critere", function(err, resultat){
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
            db.query("SELECT * FROM critere WHERE id = $1", [id] , function(err, resultat){
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
            db.query("UPDATE critere SET difficulte=$1,deadline=$2,impact=$3,implication=$4,point_git=$5 WHERE id=$6",[difficulte,deadline,impact,implication,point_git,id],function(err,resultat){
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
            db.query("DELETE  FROM critere WHERE id = $1", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while dropping critere "));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}