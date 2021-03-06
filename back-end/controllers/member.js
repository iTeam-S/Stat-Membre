const mdlsMember = require('../models/Member');
const mdlsProject=require('../models/Project')
var bcrypt = require("bcryptjs");

const fs = require('fs');

module.exports = {
    
    create:async(req,res)=>{
        try {
            let {nom,prenom,user_github,fonction,pdc,mail,password,role}=req.body;
            let hashPassword = bcrypt.hashSync(req.body.password, 8);
            let point_experience=0
            await mdlsMember.create(nom,prenom,user_github,fonction,pdc,mail,point_experience,hashPassword,role);
            res.status(200).send({
                message:"add member successfully"
            });
            
        } catch (error) {
            res.status(500).send(error.message)
            
        }
        
    },
    listAll: async (req, res) => {
        try {
            let listMember = await mdlsMember.getListMember();
            for (let i = 0; i < listMember.length; i++) {
               let nbproj=await mdlsProject.getMembreTotalProject(listMember[i].id)
               listMember[i]['nombre_projet']=nbproj[0].nombre_projet;
            }
            res.send(listMember);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    NoterMembre:async(req,res)=>{
        try {
            let {difficulte, deadline, impact, implication,id_membre,id_projet}=req.body
            
            //calcul du critere avec le coefficient
            let scoef = (difficulte * 25) + (deadline * 10) + (impact * 30) + (implication * 15)
            
            
            //ajouter le point au membre.point_experience
            await mdlsProject.ValideMember(difficulte, deadline, impact, implication,id_membre,id_projet);

            res.status(200).send({
                message:"Ce membre est noté sur ce projet"
            })
        } catch (error) {
            res.status(500).send({
                message:error.message
            })
            
        }

    },
    valideMembre:async(req,res)=>{
        try {
            
            let scoef = (difficulte * 25) + (deadline * 10) + (impact * 30) + (implication * 15) + (point_git * 20)
            let validMembre=await mdlsProject.ValideMember(scoef,id)
        } catch (error) {
            
        }

    },
    getPdc:async(req,res)=>{
        try {
            let id = parseInt(req.params.id)
            let pdc=await mdlsMember.getByprenom(id)
            res.status(200).send(pdc[0].pdc)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getOne: async(req, res) => {
        let id = parseInt(req.params.id)
        try {
            let member = await mdlsMember.getOneMember(id);
            res.send(member);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
  
    },
    listAllMemberProject:async(req,res)=>{
        try {
            let id = parseInt(req.params.id)
            let projects=await mdlsMember.getAllMemberProject(id);
            res.status(200).json(projects)
        } catch (error) {
            res.status(500).send(error.message)
            
        }

    },
    getTopFive:async(req,res)=>{
        try {
            let topfive=await mdlsMember.getTopFive();
                for (let i = 0; i < topfive.length; i++) {
                let nbproj=await mdlsProject.getMembreTotalProject(topfive[i].id);
                topfive[i]['nombre_projet']=(nbproj[0].nombre_projet);
                }
            res.status(200).json(topfive)     
        } catch (error) {
            res.status(500).send(error)
            
        }

    },
    update:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let {nom,prenom,user_github,fonction,pdc,mail,admin}=req.body;
            let updatedMember=await mdlsMember.updateMember(nom,prenom,user_github,fonction,pdc,mail,admin,id);
            res.send(updatedMember)
            
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