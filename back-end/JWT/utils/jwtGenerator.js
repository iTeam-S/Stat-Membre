const jwt=require("jsonwebtoken");
const { identity } = require("lodash");
require('dotenv').config();


function jwtGenerator(id){
    const paylod={
        user:id
    }
   return jwt.sign(payload,process.env.jwtSecret,{expiresIn:"90d"});

}
module.exports=jwtGenerator;