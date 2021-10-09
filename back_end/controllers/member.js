const mdlsMember = require('../models/Member');
const fs = require('fs');

module.exports = {
    create:async(req,res)=>{
        try {
            let {nom,prenom,user_github,fonction,pdc,mail,admin}=req.body;
            let newMember=await mdlsMember.create(nom,prenom,user_github,fonction,pdc,mail,admin);
            res.send(newMember.rows);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    listAll: async (req, res) => {
        try {
            let listMember = await mdlsMember.getListMember();
            res.send(listMember.rows);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },

    getOne: async(req, res) => {
        let id = parseInt(req.params.id)
        console.log(id);
        try {
            let member = await mdlsMember.getOneMember(id);
            res.send(member.rows);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
  
    },
    update:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let {nom,prenom,user_github,fonction,pdc,mail,admin}=req.body;
            let updatedMember=await mdlsMember.updateMember(nom,prenom,user_github,fonction,pdc,mail,admin,id);
            res.send(updatedMember.rows)
            
        } catch (error) {
            res.status(500).send(error)           
        }
        
    },
    del:async(req,res)=>{
        try {
            let id = parseInt(req.params.id)
            let delMember=await mdlsMember.deleteMember(id);
            res.send({
                message:`Member with id ${id} is removed from database`
            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    }

}