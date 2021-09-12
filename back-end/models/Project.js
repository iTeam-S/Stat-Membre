const Sequelize=require('sequelize')
const db=require("../config/database");

const Project=db.define('projects',{
   nom:{
       type:Sequelize.STRING,
       allowNull: false
   },
    repos:{
        type:Sequelize.STRING,
        allowNull: false
    },
    delai:{
        type:Sequelize.STRING,
        allowNull: false

    }
});
module.exports=Project;
