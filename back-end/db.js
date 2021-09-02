const Pool=require("pg").Pool;

const pool=new Pool({
    user:app.env('USER_POSTGRES'),
    password:app.env('password'),
    database:"iteams",
    host:"iteam-s.mg",
    port:5432
});

module.exports = pool;