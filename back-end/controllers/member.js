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
            res.status(500).send(error.message)
            
        }
        
    },
    listAll: async (req, res) => {
        try {
            let listMember = await mdlsMember.getListMember();
            res.send(listMember);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    listallonproject:async(req,res)=>{
        try {
            let listM=await mdlsMember.getmemberonproject();
            res.send(listM);
            
        } catch (error) {
            res.status(500).send(error);
            
        }

    },
    NoterMembre:async(req,res)=>{
        try {
            let {difficulte,deadline,impact,implication,point_git,id_membre}=req.body
            
            //calcul du critere avec le coefficient
            let scoef = (difficulte * 25) + (deadline * 10) + (impact * 30) + (implication * 15) + (point_git * 20)

            //Incrementer le point du membre
            let Pa=await mdlsMember.getPoint(id_membre),pointact=(Pa[0].point_experience);
            let new_point=scoef+pointact

            //ajouter le point au membre.point_experience
            await mdlsMember.setPoint(new_point,id_membre)


            res.status(200).send({
                message:"Ce membre est noté sur ce projet"
            })
        } catch (error) {
            res.status(500).send({
                message:"Il y a une errer lors de notation du membre"
            })
            
        }

    },
    valideMembre:async(req,res)=>{
        try {
            
            let scoef = (difficulte * 25) + (deadline * 10) + (impact * 30) + (implication * 15) + (point_git * 20)
            let validMembre=await mdlsMember.ValideMember(scoef,id)
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