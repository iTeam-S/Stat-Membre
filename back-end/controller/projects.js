const db = require("../models");
const Project = db.project;
const Critere=db.critere;
const Op = db.Sequelize.Op;

// Create and Save a new project 
exports.create = (req, res) => {
    //validate request
    if(!req.body.nom){
        res.status(400).send({
            message:"Le contenu ne doit pas être vide"
        });
        return;
    }

    //create a project

    const project={
        nom:req.body.nom,
        repos:req.body.repos,
        delai:req.body.delai
    };

    //save project in the database
    Project.create(project)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "somme error occured"
            });
        });
  
};

// Retrieve all projects  from the database.
exports.findAll = (req, res) => {
    Project.findAll({
      include: [{
        model: Critere,
        as: 'critere'
      }]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects."
      });
    });
  
};

// Find a single project with an id
exports.findOne = (req, res) => {
    const id=req.params.id;
    Project.findByPk(id,{
      include: [{
        model: Critere,
        as: 'critere'
      }]
    })
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:`projects with id ${id} not found`
            });
        });
  
};

// Update a project by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Project.update(req.body,{
        where:{ id: id}
    }) 
        .then(num=>{
            if(num ==1){
                res.send({
                    message:"Project  was updated successfuly"
                });
            } else{
                res.send({
                    message:`Cannot update the project with id ${id},please check the req.body`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:"Error updating the project"
            });
        });
  
};

// Delete a project with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Project.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Project was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete project with id=${id}. Maybe project was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete project with id=" + id
        });
      });
  
};
// Delete all Projects from the database.
exports.deleteAll = (req, res) => {
    Project.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} project were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all projects."
          });
        });
};
