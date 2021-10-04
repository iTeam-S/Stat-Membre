const jwt=require("jsonwebtoken")
const config = require("../config/authconfig");
const db=require("../service/connect")
const mdlsUser=require("../models/users")

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      req.userId = decoded.id;
      next();
    });
};

isAdmin=(req,res,next)=>{
  try {
    let id=parseInt(req.params.id);
    let userR=mdlsUser.getUserWithRoles(id);
    if(userR.user_role==="Admin"){
      next;
      return;
    }
    res.status(403).send({
      message:"Require Admin Role!"
    });
    return;
  }catch (error) {
    res.status(500).send({
      message:"Error while finding user"
    })
  }
}


const authJwt={
  verifyToken:verifyToken,
  isAdmin:isAdmin
};

module.exports = authJwt;
  
  
  
  
  
  