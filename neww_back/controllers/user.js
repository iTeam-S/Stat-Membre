const mdlsUser=require("../models/users");


module.exports={
    create:async(req,res)=>{
        try {
            let {nom,mail,password}=req.body;
            let user=await mdlsUser.create(nom,mail,password);
            res.status(200).send(user)
            
        } catch (error) {
            res.send(error)
            
        }
    },
    createUserRole:async(req,res)=>{
        try {
            let {id_users,id_role}=req.body;
            let userR=await mdlsUser.giveRoleToUser(id_users,id_role);
            res.status(200).send({
                message:`Users with id ${id_users} has a role now`
            })
            
        } catch (error) {
            res.status(500).send(error)            
        }

    },
    
    getAllUser:async(req,res)=>{
        try {
            let users=await mdlsUser.fetchUser();
            res.status(200).send(users)
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    getUserRole:async(req,res)=>{
        try {
            let id=parseInt(req.params.id);
            let user=await mdlsUser.getUserRole(id);

            res.status(200).send(user.rows)
            
        } catch (error) {
            res.status(error)
            
        }

    },
    getOneUser:async(req,res)=>{
        try {
            let id=parseInt(req.params.id);
            let user=await mdlsUser.getOneUser(id);
            res.status(200).send(user);

            
        } catch (error) {
            res.status(500).send(error)
        }
    },

    updat:async(req,res)=>{
        try {
            let id=parseInt(req.params.id);
            let {nom,mail,password}=req.body;
            let updateUser=await mdlsUser.updateUser(nom,mail,password,id);
            res.send({
                message:`User with id ${id} is updated`
            })
            
        } catch (error) {
            res.status(500).send(error)
        }
    },

    delUser:async(req,res)=>{
        try {
            let id=parseInt(req.params.id);
            let delUser=await mdlsUser.delUser(id);
            res.status(200).send({
                message:`User with id ${id} is deleted`
            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    }


}