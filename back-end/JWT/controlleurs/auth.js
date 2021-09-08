const router=require('express').Router();
const pool=require("../db");
const bcrypt=require('bcrypt');
const jwtGenerator=require("../utils/jwt");
const validInfo=require("../middleware/validinfo");

exports.register=async(req,res)=>{
    try {
        //destructure the req.body(name,admin,email,password)

        const {nom,prenom,user_github,fonction,pdc,admin,mail,password}=req.body;

         //ckeck if user exist(then throw error)

        const user=await pool.query("SELECT * FROM membre WHERE mail=$1",[mail]);
        if(user.rows.length !== 0){
            return res.status(401).send("User already exist");
        }

        //Bcrypt the user password

        const saltRound =10;
        const salt =await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password,salt);

        //enter user inside our database
        const newUser=await pool.query("INSERT INTO membre(nom,prenom,user_github,fonction,pdc,admin,mail,password) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",[nom,prenom,user_github,fonction,pdc,admin,mail,bcryptPassword]);


        //generating our jwt token
        const token=jwtGenerator(jwtGenerator.rows[0].id);

        res.json({token}); 


    } catch (err) {
        console.error("err.message");
        res.status(500).send("server Error");
    }
};


//login route

exports.login=async(req,res)=>{
    try {
        //destructure the body request
        const {mail,password}=req.body;

        //check if user doesn't exist
        const user=await pool.query("SELECT * FROM membre WHERE user_email=$1",[mail]);
        
        
        if(user.rows.length ===0){
            return res.status(401).send("Password or email incorrect");

        }
        //check if incomming password is the same is the database password
        const validPassword=await bcrypt.compare(password,user.rows[0].password);
        if(!validPassword){
            return res.status(401).json("Password or email incorrect")
             
        }

        //give them the jwt token
        const token=jwtGenerator(user.rows[0].id);
        res.json({token});
    } catch (error) {
        console.error("err.message");
        res.status(500).send("server Error");
        
    }
};

module.exports =router;
