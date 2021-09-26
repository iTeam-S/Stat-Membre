const db = require("../models");
const Critere = db.critere;
const Op = db.Sequelize.Op;

// Create and Save critere 
exports.create = (req, res) => {
    //validate request
    if(!req.body.difficulte){
        res.status(400).send({
            message:"Le contenu ne doit pas être vide"
        });
        return;
    }

    //create a critere

    const critere={
      difficulte:req.body.difficulte ,
      deadline:req.body.deadline ,
      impact:req.body.difficulte,
      implication:req.body.implication,
      point_git:req.body.point_git,
      projectId:req.body.projectId
    };

   //save criteres in the database
   Critere.create(critere)
   .then(data=>{
       res.send(data);
   })
   .catch(err=>{
       res.status(500).send({
           message:err.message || "somme error occured"
       });
   });
};

//Retrieve all criteres  from the database.
exports.findAll = (req,res)=>{
    const difficulte=req.query.difficulte;
    var condition = difficulte ? { difficulte: { [Op.iLike]: `%${difficulte}%` } } : null;
   
    Critere.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving criteres."
      });
    });
};
//find a single criteres with an id

exports.findOne = (req,res)=>{
    const id=req.params.id;
    Critere.findByPk(id)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:`critere with id ${id} not found`
            });
        });
};

//update a project_criteres

exports.update=(req,res)=>{
    const id = req.params.id;

    Critere.update(req.body,{
        where:{ id: id}
    }) 
        .then(num=>{
            if(num ==1){
                res.send({
                    message:"criteres  was updated successfuly"
                });
            } else{
                res.send({
                    message:`Cannot update the criteres  with id ${id},please check the req.body`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:"Error updating the criteres"
            });
        });
};

// Delete a Project with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Critere.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Critere was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete criteres with id=${id}. Maybe criteres  was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete criteres with id=" + id
        });
      });
  };
  
  // Delete all criteres  from the database.
  exports.deleteAll = (req, res) => {
    Critere.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} criteres  were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all criteres ."
        });
      });
  };
  
