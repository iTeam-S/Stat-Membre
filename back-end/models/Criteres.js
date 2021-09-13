module.exports = (sequelize, Sequelize) => {
    const Critere = sequelize.define("critere", {
        difficulte:{
            type: Sequelize.INTEGER
        },
        deadline:{
            type: Sequelize.INTEGER
        },
        impact:{
            type: Sequelize.INTEGER
        },
        implication:{
            type: Sequelize.INTEGER
        },
        point_git:{
            type:Sequelize.INTEGER
        }
    });
  
    return Critere;
  };