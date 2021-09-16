const db = require("../models");
const Member = db.membre;
const Op = db.Sequelize.Op;

// Create and Save a new Member 
exports.create = (req, res) => {
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
        user_github:req.body.user_github,
        fonction:req.body.fonction,
        pdc:req.body.pdc,
        mail:req.body.mail,
        admin:req.body.admin ? req.body.admin : false,
        password:req.body.password

    };

    //save membre in the database
    Member.create(member)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "somme error occured"
            });
        });
  
};

// Retrieve all Members  from the database.
exports.findAll = (req, res) => {
   
    Member.findAll(
        {
      include:[{
        model: Project,
        as:'pro',
        attributes:['nom',"repos","delai"],
        through:{
          attributes:[]
        }
        }],
    })
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

// Find a single Members with an id
exports.findOne = (req, res) => {
    const id=req.params.id;
    Member.findByPk(id,{
        {
      include:[{
        model: Project,
        as:'pro',
        attributes:['nom',"repos","delai"],
        through:{
          attributes:[]
        }
        }],
    })
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:`Member with id ${id} not found`
            });
        });
  
};

// Update a Members by the id in the request
exports.update = (req, res) => {
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

// Delete a Members with the specified id in the request
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

// Delete all Members from the database.
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
