const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = async(req, res, next)=>{

try {
  const jwtToken = req.header("token");

  // Check if not token
  if (!jwtToken) {
    return res.status(403).json({ msg: "Not autorized" });
  }

 const paylod=jwt.verify(jwtToken,process.env.jwtSecret)
 req.user =payload.user;

     
 } catch (error) {
     console.error(err.message);
     return res.status(403).json("Not autorize");
     
 }
};