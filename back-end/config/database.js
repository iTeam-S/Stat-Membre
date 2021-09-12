
const Sequelize=require('sequelize');

const db=new Sequelize('iteams','postgres','vltn21/m',{
    host:'localhost',
    dialect:'postgres',

    define:{
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }

});
module.exports=db;