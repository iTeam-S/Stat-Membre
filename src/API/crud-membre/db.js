const Pool=require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    password:"",
    database:"iteams",
    host:"iteam-s.mg",
    port:5432
});

module.exports = pool;