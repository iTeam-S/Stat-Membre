const Sequelize=require("sequelize");
const db=require("../config/database");


const Member=db.define('membres',{
    nom:{
        type: Sequelize.STRING
    },
    prenom:{
        type: Sequelize.STRING
    },
    user_github:{
        type: Sequelize.STRING
    },
    fonction:{
        type: Sequelize.STRING
    },
    pdc:{
        type: Sequelize.STRING
    },
    mail:{
        type: Sequelize.STRING
    },
    admin:{ 
        type: Sequelize.BOOLEAN
    },
    password:{  
        type: Sequelize.STRING
    }
})

module.exports=Member;

