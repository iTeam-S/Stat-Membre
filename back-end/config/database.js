
const Sequelize=require('sequelize');

const db=new Sequelize('iteams-s.mg',app.env("POSTGRES_USER"),app.env("POSTGRES_PASSWORD"),{
    host:'iteams-s.mg',
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
