const Pool=require("pg").Pool;

const pool=new Pool({
    user:'postgres',
    password:' ',
    database:"iteams",
    host:"localhost",
    port:5432
});

module.exports = pool;