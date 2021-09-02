const pool=require("./db");

exports.createMembre = (async(req,res)=>{
    const {nom,prenom,user_github,fonction,pdc,admin,mail,password}=req.body;
    try{
        const seq="INSERT INTO membre (nom,prenom,user_github,fonction,pdc,admin,mail,password) VALUES($1,$2,$3,$4,$5) RETURNING *";
        const newMember = await pool.query(seq,[name,firstname,nickname]);
        res.json(newMember.rows[0]);
    }catch(err){  
        console.error(err.message);
    }
})

exports.getAllmembre=(async(req,res)=>{
    try{
        const allMember= await pool.query("SELECT * FROM membre");
        res.json(allMember.rows);

    }catch(err){
        console.error(err.message);
    }
});

exports.getOneMember=(async(req,res)=>{
    const { firstname }=req.params;
    try{
        const member=await pool.query("SELECT * FROM membre WHERE prenom=$1",[firstname]);
        res.json(member.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

exports.updateMember=(async(req,res)=>{
    const {firstname}=req.params;
    const {nom,prenom,user_github,fonction,pdc,admin,mail,password}=req.body;
    try{
        const seq="UPDATE membre SET nom=$1,prenom=$2,user_github=$3,fonction=$4,pdc=$5,admin=$6,mail=$7,password=$7 WHERE prenom=$6";
        const updateMember=await pool.query(seq,[nom,prenom,user_github,fonction,pdc,admin,mail,password]);
        res.json("Membre updated");
    }catch(err){
        console.error(err.message);
    }
});

exports.deleteMember=(async(req,res)=>{
    const {firstname}=req.params;
    try{
        const deleteMember = await pool.query("DELETE FROM member WHERE prenom=$1",[firstname]);
        res.json("This member is deleted successfuly from the team");
    }catch(err){
        console.error(err.message);
    }
});
