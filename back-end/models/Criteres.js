const Sequelize=require("sequelize");
const db=require("../config/database");


const Criteres=db.define('criteres',{
    difficulte:{
        type: Sequelize.INTEGER
    },
    deadline:{
        type: Sequelize.INTEGER
    },
    impact:{
        type: Sequelize.INTEGER
    },
    implication:{
        type: Sequelize.INTEGER
    },
    id_project:{
        type: Sequelize.INTEGER
    },
    id_membre:{
        type: Sequelize.INTEGER
    }
})

module.exports=Criteres;
