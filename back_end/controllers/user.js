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
            let name=parseInt(req.params.name);
            let user=await mdlsUser.getUserWithRoles(name);

            res.status(200).send(user.rows)
            
        } catch (error) {
            res.status(error)
            
        }

    },
    getOneUser:async(req,res)=>{
        try {
            //let id=parseInt(req.params.id);
            let prenom=req.params.prenom
            let user=await mdlsUser.getOneUser(prenom);
            res.status(200).send(user.rows[0]);

            
        } catch (error) {
            res.status(500).send(error)
        }
    },

    update:async(req,res)=>{
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
            let delUser=await mdlsUser.deleteUser(id);
            res.status(200).send({
                message:`User with id ${id} is deleted`
            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    allaccess:async(req,res)=>{
        try {
            res.status(200).send("Public Content")
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    userBoard:async(req,res)=>{
        try {
            res.status(200).send("Simple user content")
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    adminBoard:async(req,res)=>{
        try {
            res.status(200).send("Admin dashboard");
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    }



}