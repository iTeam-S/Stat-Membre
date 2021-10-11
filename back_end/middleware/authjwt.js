const jwt=require("jsonwebtoken")
const config = require("../config/authconfig");
const mdlsRole=require("../models/roles")



module.exports={
  verifyToken:(req, res, next) => {
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
},

  isAdmin:async (req,res,next)=>{
  try {
    let name=req.body.prenom;
    
    let userR= await mdlsRole.getUserWithRoles(name);
    
    if(userR.rows[0].user_role === "admin"){
      next();
      return;
    }
    res.status(403).send({
      message:"Require Admin Role!"
    });
    next();
    return;
  }catch (error) {
    res.status(500).send({
      message:"Error while finding user"
    })
  }
  }
}


  
  
  
  
  
  