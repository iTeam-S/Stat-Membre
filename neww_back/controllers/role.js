const db=require('../service/connect')
const mdlsRole=require("../models/roles")

module.exports={
    createRole:async(req,res)=>{
        try {
            let {name}=req.body;
            let role=await  mdlsRole.createRole(name);
            res.status(200).json(role.rows) 
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    getUserRole:async(req,res)=>{
        try {
            let {role}=req.params.role;
            let user_r=await mdlsRole.getUserRole(role);
            res.status(200).json(user_r.rows)
            
        } catch (error) {
            res.status(500).send(error);
            
        }
        
    },
    updateRole:async(req,res)=>{
        try {
            let id=parseInt(req.params.id);
            let {id_role,id_users}=req.body;
            let updatedRole=await mdlsRole.updateUserRole(id,id_role,id_users);
            res.status(200).send(updatedRole.rows)
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    }

}
