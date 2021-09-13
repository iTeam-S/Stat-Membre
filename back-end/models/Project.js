module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        nom:{
            type:Sequelize.STRING,
            allowNull: false
        },
         repos:{
             type:Sequelize.STRING,
             allowNull: false
         },
         delai:{
             type:Sequelize.STRING,
             allowNull: false
     
         }
     });
  
    return Project;
  };