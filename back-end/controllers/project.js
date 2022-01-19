const mdlsProject = require('../models/Project');
const mdlsMember=require('../models/Member')
const mdlsCritere=require("../models/Critere")
const fs = require('fs');
const moment=require('moment');
const { format } = require('path');

module.exports = {
    create: async (req, res) => {
        try {
            /*body*/
            let { nom, repos, delai} = req.body;
            let valide=false;

            /*verifier si le projet existe déjà*/

            let thisproject=await mdlsProject.checkProject(nom);
            console.log(thisproject[0]);
            if(thisproject[0]===undefined){
            
            /*create project*/
            console.log(nom,repos,delai,valide);
            await mdlsProject.create(nom,repos,delai,valide);

            res.status(200).send({
                message: "Project created successfully"
            })
                
        }else{
            res.status(500).send({
                message:"Ce projet existe déjà,inserer un autre projet"
            })
        }

        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    
    listAll: async (req, res) => {
        try {
            let listProject = await mdlsProject.getListProject();
            res.send(listProject);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    listAllnodeploye: async(req,res)=>{
        try {
            let listnodproject=await mdlsProject.listAllnodeploye();
            res.status(200).send(listnodproject)
            
        } catch (error) {
            res.status(500).send(error);
            
        }
    },
    listAlldeployed:async(req,res)=>{
        try {
            let listdeployeproject=await mdlsProject.listAlldeploye();
            res.status(200).send(listdeployeproject);
            
        } catch (error) {
            res.status(500).send(error);
            
        }

    },
    listAllWithCritere: async (req, res) => {
        try {
            let listPc = await mdlsProject.getAllProjectCritere();
            res.send(listPc)

        } catch (error) {
            res.status(500).send(error)
        }

    },
    listOneWithCritere: async (req, res) => {
        try {
            let id = parseInt(req.params.id)
            let listc = await mdlsProject.getOneProjectCritere(id);
            res.send(listc)


        } catch (error) {
            res.status(500).send(error)

        }

    },
    add: async (req, res) => {
        
        try {
            let id_membre=req.body.id_membre;
            let id_project=req.body.id_project;

            let membre = await mdlsProject.checkMember(id_membre);


            
            let isExist=await mdlsProject.CheckIfMemberIsOnProject(id_membre,id_project)


            if(isExist.length===0){
            
            let project = await mdlsProject.checkProject(id_project);
            let project_part=await mdlsProject.getProjectTotalParticipants(id_project);

           

            if(project_part[0].total_participant ===null){
                project_part[0].total_participant =0
            }
            

            let TotProject= membre[0].nombre_projet;
            if(TotProject===null){
                TotProject=0
            }
                 
            let umber=await mdlsProject.addMemberToProject(membre[0].id, project[0].id);
            console.log(membre[0].id, project[0].id); 
           

            let new_participant=project_part[0].total_participant+1;


            let new_tot_proj=TotProject+1;

            await mdlsProject.setParticipant(new_participant,id_project);
            await mdlsMember.setTotproject(new_tot_proj,membre[0].id)
            
            res.status(200).send({
                message: "Member added on a project successfully"
            })
        }else{
            res.status(500).send({
                message:`Ce membre est déjà dans le projet`
            });
        }
           
        } catch (error) {
            res.status(500).send(error.message);

        }

    },
    listAllWithMember: async (req, res) => {
        try {
            let listpm = await mdlsProject.getProjectMember();
            res.send(listpm.rows);


        } catch (error) {
            res.status(500).send(error)

        }
    },

    listOneWithParticipant: async (req, res) => {
        try {
            let id = req.params.id;
            let listp = await mdlsProject.getOneProjectWithPart(id);
            res.status(200).send(listp);

        } catch (error) {
            res.status(500).send(error.message)
        }

    },

    getOne: async (req, res) => {
        try {
            let id = parseInt(req.params.id)
            let project = await mdlsProject.getOneProject(id);
            res.send(project);

        } catch (error) {
            res.status(500).send(error)

        }

    },
    valideProject:async(req,res)=>{
        try {
            let id=parseInt(req.params.id)
            let current=new Date();
            let date_validation=`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
            let {valide}=req.body;
            let isValide=await mdlsProject.CheckProjectIfnotValidedYet(id)
            
            if(isValide[0].valide===0){
                console.log(isValide[0].valide);                
                await mdlsProject.valideProject(valide,date_validation,id);
                res.status(200).send({
                    message:"Project valided successfully"
                })
                
            }else{
                res.status(500).send({
                    message:"Ce projet est déjà validé"
                })
            }
            
        } catch (error) {
            res.status(500).send(
                error.message
            )
            
        }

    },
    listAllvalided:async(req,res)=>{
        try {
            let validedProject=await mdlsProject.listAllvalidedProject();
            console.log(validedProject);
            res.status(200).send(validedProject)
        } catch (error) {
            res.status(500).send(error.message)
            
        }

    },
    update: async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            let { nom, repos, delai } = req.body;
            let updatedProject = await mdlsProject.updateProject(nom, repos, delai, id);
            res.send(updatedProject)

        } catch (error) {
            res.status(500).send(error);

        }

    },
    deleteProjectMember:async(req,res)=>{
        try {
            let id_membre=req.body.id_membre;
            let id_projet=req.body.id_projet;
            let membre = await mdlsProject.checkMember(id_membre);
            let project = await mdlsProject.checkProject(id_projet);
            let project_part=await mdlsProject.getProjectTotalParticipants(id_projet);

            if(project_part[0].total_participant ===null){
                project_part[0].total_participant =0
            }

   
            let umber=await mdlsProject.deleteProjectMember(membre[0].id, project[0].id);
            let new_participant=0
            if(project_part[0].total_participant>0){
                new_participant=project_part[0].total_participant-1;
            }else{
                new_participant=0
            }
            

            

            await mdlsProject.setParticipant(new_participant,id_projet);
            

            res.status(200).send({
                message: "Member deleted on a project successfully"
            })
           
        } catch (error) {
            res.status(500).send(error);

        }
        

    },

    del: async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            await mdlsProject.deleteProject(id);
            res.send({
                message: `Project with id ${id} is removed`
            })

        } catch (error) {
            res.status(500).send(error.message)

        }

    }

}