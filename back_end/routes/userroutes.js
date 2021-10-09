const authJwt = require("../middleware/authjwt");
const userCtrl = require("../controllers/user");
const express=require("express");

const router=express.Router()



  //public content

  router.get("/api/content/all", userCtrl.allaccess)

  //user content

  router.get("/api/content/user",[authJwt.verifyToken],userCtrl.userBoard);

  //admin dashboard

  router.get("/api/content/admin",[authJwt.verifyToken, authJwt.isAdmin],userCtrl.adminBoard);

module.exports = router