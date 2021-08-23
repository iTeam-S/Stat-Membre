const express = require("express");
const app=express();
const pool=require("./db");


app.use(express.json())


//GET ALL MEMBER//
app.get("/members",async(req,res)=>{
    try{
        const allMember= await pool.query("SELECT * FROM membre");
        res.json(allMember.rows);

    }catch(err){
        console.error(err.message);
    }
})

//GET ONE MEMBER//
app.get("/members/:prenom",async(req,res)=>{
    const { firstname }=req.params;
    try{
        const member=await pool.query("SELECT * FROM membre WHERE prenom=$1",[firstname]);
        res.json(member.rows[0]);

    }catch(err){
        console.error(err.message);
    }
})


//CREATE A MEMBER//
app.post("/members",async(req,res)=>{
    const {name,firstname,nickname}=req.body;
    try{
        const seq="INSERT INTO membre (nom,prenom,user_github,fonction,pdc) VALUES($1,$2,$3,$4,$5) RETURNING *";
        const newMember = await pool.query(seq,[name,firstname,nickname]);
        res.json(newMember.rows[0]);
    }catch(err){  
        console.error(err.message);
    }
})


//UPDATE MEMBER//
app.put("/members/:prenom",async(req,res)=>{
    const {firstname}=req.params;
    const {nom,prenom,prenom_usuel}=req.body;
    try{
        const seq="UPDATE membre SET nom=$1,prenom=$2,user_github=$3,fonction=$4,pdc=$5 WHERE prenom=$6";
        const updateMember=await pool.query(seq,[nom,prenom,user_github,fonction,pdc]);
        res.json("Membre updated");
    }catch(err){
        console.error(err.message);
    }
})


//DELETE MEMBER//
app.delete("/members/:prenom",async(req,res)=>{
    const {firstname}=req.params;
    try{
        const deleteMember = await pool.query("DELETE FROM member WHERE prenom=$1",[firstname]);
        res.json("This member is deleted successfuly from the team");
    }catch(err){
        console.error(err.message);
    }
})
app.listen(5000,()=>{
    console.log("Server listening on port 5000");
})