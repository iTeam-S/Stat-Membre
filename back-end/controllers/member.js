const mdlsMember = require('../models/Member');
const mdlsProject= require("../models/Project");
const mdlsCritere=require("../models/Critere")

const fs = require('fs');

module.exports = {
    create:async(req,res)=>{
        try {
            let {nom,prenom,user_github,fonction,pdc,mail,admin}=req.body;
            let point_experience=0
            await mdlsMember.create(nom,prenom,user_github,fonction,pdc,mail,admin,point_experience);
            res.status(200).send({
                message:"add member successfully"
            });
            
        } catch (error) {
            res.status(500).send({
                message :"errer lors de creation du membre"
            })
            
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
    listallonproject:async(req,res)=>{
        try {
            let listM=await mdlsMember.getmemberonproject();
            res.send(listM.rows);
            
        } catch (error) {
            res.status(500).send(error);
            
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
    listAllMemberProject:async(req,res)=>{
        try {
            let nom_member=req.params.membername;
            let projects=await mdlsMember.getAllMemberProject(nom_member);
            res.status(200).json(projects.rows)
            
        } catch (error) {
            res.status(500).send(error)
            
        }

    },
    getTopFive:async(req,res)=>{
        try {
            let topfive=await mdlsMember.getTopFive();
            res.status(200).json(topfive.rows)     
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