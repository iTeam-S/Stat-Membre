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
            let valide="false";

             /* date de creation et date de validation*/
             let current=new Date();
             let date_creation=`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

            /*calcul de point pour le projet*/
            let dern_cri=await mdlsCritere.getListCritere();
            let dern_id=dern_cri.rows[0].id;
    

            let Pp = await mdlsCritere.getOneCritere(dern_id);
            let i = Pp.rows[0];

            let scoef = (i.difficulte * 25) + (i.deadline * 10) + (i.impact * 30) + (i.implication * 15) + (i.point_git * 20)

            /*create project*/

            let project=await mdlsProject.create(nom, repos, delai, dern_id,scoef,valide,date_creation);

            res.status(200).send({
                message: "Project created successfully"
            })

        } catch (error) {
            res.status(500).send(error)
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
    listAllnodeploye: async(req,res)=>{
        try {
            let listnodproject=await mdlsProject.listAllnodeploye();
            res.status(200).send(listnodproject.rows)
            
        } catch (error) {
            res.status(500).send(error);
            
        }
    },
    listAlldeployed:async(req,res)=>{
        try {
            let listdeployeproject=await mdlsProject.listAlldeploye();
            res.status(200).send(listdeployeproject.rows);
            
        } catch (error) {
            res.status(500).send(error);
            
        }

    },
    listAllWithCritere: async (req, res) => {
        try {
            let listPc = await mdlsProject.getAllProjectCritere();
            res.send(listPc.rows)

        } catch (error) {
            res.status(500).send(error)
        }

    },
    listOneWithCritere: async (req, res) => {
        try {
            let id = parseInt(req.params.id)
            let listc = await mdlsProject.getOneProjectCritere(id);
            res.send(listc.rows)


        } catch (error) {
            res.status(500).send(error)

        }

    },
    add: async (req, res) => {
        
        try {
            let nom_member=req.body.membername;
            let nom_project=req.body.projectname;

            let membre = await mdlsProject.checkMember(nom_member);
            let project = await mdlsProject.checkProject(nom_project);
            let project_part=await mdlsProject.getProjectTotalParticipants(nom_project);

            if(project_part.rows[0].total_participant ==null){
                project_part.rows[0].total_participant =0
            }


            let pointAct=await mdlsMember.getPoint(membre.rows[0].id);
            if(pointAct.rows[0].point_experience == null){
                pointAct.rows[0].point_experience=0;
            };

            let pact=pointAct.rows[0].point_experience;
                     
            let umber=await mdlsProject.addMemberToProject(membre.rows[0].id, project.rows[0].id);

            let new_participant=project_part.rows[0].total_participant+1;

            let Pp = await mdlsProject.getOneProjectCritere(project.rows[0].id);
            let i = Pp.rows[0]

            let scoef = (i.difficulte * 25) + (i.deadline * 10) + (i.impact * 30) + (i.implication * 15) + (i.point_git * 20)

            let new_point=pact+scoef;

            await mdlsProject.setParticipant(new_participant,nom_project);
            await mdlsMember.setPoint(new_point,membre.rows[0].id);
            

            res.status(200).send({
                message: "Member added on a project successfully"
            })
           
        } catch (error) {
            res.status(500).send(error);

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
            let nom = req.params.nom;
            console.log(nom);
            let listp = await mdlsProject.getOneProjectWithPart(nom);
            res.status(200).send(listp.rows);

        } catch (error) {
            res.status(500).send(error)
        }

    },

    calculPoint: async (req, res) => {
        try {
            let id = parseInt(req.params.id)
            let data = await mdlsProject.getOneProjectCritere(id);
            res.status(200).send(data.rows[0].deadline);

        } catch (error) {
            res.status(500).send(error);

        }

    },
    calculNbParticipant: async (req, res) => {
        try {
            let prod = this.listAllWithMember;
            res.send(prod);

        } catch (error) {
            res.status(500).send(error)

        }

    },
    getOne: async (req, res) => {
        try {
            let id = parseInt(req.params.id)
            let project = await mdlsProject.getOneProject(id);
            res.send(project.rows[0]);

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
            console.log(date_validation);
            let validProject=await mdlsProject.valideProject(valide,date_validation,id);
            res.status(200).send({
                message:"Project valided successfully"
            })
            
        } catch (error) {
            res.status(500).send({
                message:"validation error"
            })
            
        }

    },
    listAllvalided:async(req,res)=>{
        try {
            let validedProject=await mdlsProject.listAllvalidedProject();
            res.status(200).send(validedProject.rows)
        } catch (error) {
            res.status(500).send({
                message:"Error while founding valided project"
            })
            
        }

    },
    update: async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            let { nom, repos, delai } = req.body;
            let updatedProject = await mdlsProject.updateProject(nom, repos, delai, id);
            res.send(updatedProject.rows[0])

        } catch (error) {
            res.status(500).send(error);

        }

    },
    deleteProjectMember:async(req,res)=>{
        try {
            let nom_member=req.body.membername;
            let nom_project=req.body.projectname;
            let membre = await mdlsProject.checkMember(nom_member);
            let project = await mdlsProject.checkProject(nom_project);
            let project_part=await mdlsProject.getProjectTotalParticipants(nom_project);

            if(project_part.rows[0].total_participant ==null){
                project_part.rows[0].total_participant =0
            }


            let pointAct=await mdlsMember.getPoint(membre.rows[0].id);
            if(pointAct.rows[0].point_experience == null){
                pointAct.rows[0].point_experience=0;
            };

            let pact=pointAct.rows[0].point_experience;
                     
            let umber=await mdlsProject.deleteProjectMember(membre.rows[0].id, project.rows[0].id);

            let new_participant=project_part.rows[0].total_participant-1;

            let Pp = await mdlsProject.getOneProjectCritere(project.rows[0].id);
            let i = Pp.rows[0]

            let scoef = (i.difficulte * 25) + (i.deadline * 10) + (i.impact * 30) + (i.implication * 15) + (i.point_git * 20)

            let new_point=pact-scoef;

            await mdlsProject.setParticipant(new_participant,nom_project);
            await mdlsMember.setPoint(new_point,membre.rows[0].id);
            

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
            res.status(500).send(error)

        }

    }

}