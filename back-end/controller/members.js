const express=require('express');
const Sequelize=require('sequelize');
const Member = require('../models/Member');

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

    const member={
        nom:req.body.nom,
        prenom:req.body.prenom,
        fonction:req.body.fonction,
        pdc:req.body.pdc,
        mail:req.body.mail,
        admin:req.body.admin ? req.body.published : false,
        password:req.body.password

    };

    //save membre in the database
    Member.create(membre)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "somme error occured"
            });
        });
};

//Retrieve all members  from the database.
exports.findAll = (req,res)=>{
    const nom=req.query.nom;
    var condition = nom ? { nom: { [Op.iLike]: `%${nom}%` } } : null;
   
    Member.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Members."
      });
    });
};
//find a single membre with an nom

exports.findOne = (req,res)=>{
    const id=req.params.id;
    Member.findByPk(id)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:`Member with nom ${id} not found`
            });
        });
};

//update a member by the id in the request

exports.update=(req,res)=>{
    const id = req.params.id;

    Member.update(req.body,{
        where:{ id: id}
    }) 
        .then(num=>{
            if(num ==1){
                res.send({
                    message:"Member was updated successfuly"
                });
            } else{
                res.send({
                    message:`Cannot update the Member with id ${id},please check the req.body`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:"Error updating the Member"
            });
        });
};

// Delete e member with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Member.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Member was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Member with id=${id}. Maybe member was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Member with id=" + id
        });
      });
  };
  
  // Delete all Projects from the database.
  exports.deleteAll = (req, res) => {
    Member.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Member were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Members."
        });
      });
  };