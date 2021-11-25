const db=require('../service/connect')
const mdlsRole=require("../models/roles")

module.exports={
    createRole:async(req,res)=>{
        try {
            let {name}=req.body;
            let crole=await mdlsRole.checkRole(name);
            if(crole.rows[0]){
                res.status(500).send({
                    message:"This role is already exist"
                })

            }else{
                let role=await  mdlsRole.createRole(name);
                res.status(200).send({
                message:'Create role successfully'
            })

            }
             
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    createUserRole:async(req,res)=>{
        try {
            let {id_users,id_role}=req.body;
            let userR=await mdlsRole.giveRoleToUser(id_users,id_role);
            res.status(200).send({
                message:`Users with id ${id_users} has a role now`
            })
            
        } catch (error) {
            res.status(500).send(error)            
        }

    },
    getUserWithRoles:async(req,res)=>{
        try {
            let prenom=req.params.prenom;
            let useR=await mdlsRole.getUserWithRoles(prenom);
            res.status(200).send(useR.rows[0])
            
        } catch (error) {
            res.status(500).send(error)
        }

    },
    getRoleUser:async(req,res)=>{
        try {
            let name=req.params.name;


            let userr = await mdlsRole.getRoleUser(name);
            
            res.status(200).json(userr.rows)
            
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