const express=require('express');
const Sequelize=require('sequelize');
const Project= require("../models/Project")

//Create and save a new Project
exports.create=(req,res)=>{
    //validate request
    if(!req.body.nom){
        res.status(400).send({
            message:"Le contenu ne doit pas être vide"
        });
        return;
    }

    //create a membre/user

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

//Retrieve all Tutorials from the database.
exports.findAll = (req,res)=>{
    const nom=req.query.nom;
    var condition = nom ? { nom: { [Op.iLike]: `%${nom}%` } } : null;
   
    Project.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
//find a single project with an nom

exports.findOne = (req,res)=>{
    const id=req.params.id;
    Project.findByPk(id)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:`Project with id ${id} not found`
            });
        });
};

//update a tutorial by the id in the request

exports.update=(req,res)=>{
    const id = req.params.id;

    Project.update(req.body,{
        where:{ id: id}
    }) 
        .then(num=>{
            if(num ==1){
                res.send({
                    message:"Project was updated successfuly"
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

// Delete a Project with the specified id in the request
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
            message: `Cannot delete Project with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Project with id=" + id
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
        res.send({ message: `${nums} Projects were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Projects."
        });
      });
  };
  