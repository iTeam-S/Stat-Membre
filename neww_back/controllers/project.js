const mdlsProject = require('../models/Project');
const fs = require('fs');

module.exports = {
    create:async(req,res)=>{
        try {
            let {nom,repos,delai,id_critere}=req.body;
            let newProject=await mdlsProject.create(nom,repos,delai,id_critere);
            res.send(newProject.rows);
            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    add:async(req,res)=>{
        let id_membre=parseInt(req.body.id_member), id_project=parseInt(req.body.id_project);
        try {
            let membre=await mdlsProject.checkMember(id_membre);
            let project=await mdlsProject.checkProject(id_project);
            let participant=await mdlsProject.addMemberToProject(membre.rows[0].id,project.rows[0].id);

            res.status(200).send(participant.rows[0])

        } catch (error) {
            res.status(500).send(error);
            
        }

    },
    
    listAll: async (req, res) => {
        try {
            let listProject = await mdlsProject.getListProject();
            res.send(listProject.rows);

            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    
    listAllWithCritere:async(req,res)=>{
        try {
            let listPc=await mdlsProject.getAllProjectCritere();
            res.send(listPc.rows)
            
        } catch (error) {
            res.status(500).send(error)
        }

    },
    listOneWithCritere:async(req,res)=>{
        try {
            let id=parseInt(req.params.id)
            let listc=await mdlsProject.getOneProjectCritere(id);
            res.send(listc.rows)

            
        } catch (error) {
            res.status(500).send(error)
            
        }

    },
    listAllWithMember:async(req,res)=>{
        try {
            let listpm = await mdlsProject.getProjectMember();
            res.send(listpm.rows);

            
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    listOneWithParticipant:async(req,res)=>{
        try {
            let id= parseInt(req.params.id);
            let listp=await mdlsProject.getOneProjectWithPart(id);
            res.status(200).send(listp.rows);
            
        } catch (error) {
            res.status(500).send(error)
        }

    },
    calculPoint:async(req,res)=>{
        try {
            let id=parseInt(req.params.id)
            let data=await mdlsProject.getOneProjectCritere(id);
            res.status(200).send(data.rows[0].deadline);
            
        } catch (error) {
            res.status(500).send(error);
            
        }

    },
    calculNbParticipant:async(req,res)=>{
        try {
            let prod= this.listAllWithMember;
            res.send(prod);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    getOne: async(req, res) => {
        try {
            let id = parseInt(req.params.id)
            let project = await mdlsProject.getOneProject(id);
            res.send(project.rows[0]);
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    },
    update:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let {nom,repos,delai}=req.body;
            let updatedProject=await mdlsProject.updateProject(nom,repos,delai,id);
            res.send(updatedProject.rows[0])
            
        } catch (error) {
            res.status(500).send(error);
            
        }
        
    },
    del:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let delProject=await mdlsProject.deleteProject(id);
            res.send({
                message:`Project with id ${id} is removed`
            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    }

}