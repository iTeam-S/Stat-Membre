
CREATE DATABASE iteams;

CREATE TABLE members(
    id int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    prenom varchar(255) NOT NULL,
    user_github varchar(255) NOT NULL,
    fonction varchar(255) NOT NULL,
    pdc varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    admin boolean NOT NULL,
    point_experience INTEGER,
    nombre_projet INTEGER,
    id_critere INTEGER NOT NULL,
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE project(
    id int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai INTEGER NOT NULL,
    total_participant INTEGER,
    valide BOOLEAN NOT NULL,
    creation_date DATE NOT NULL,
    validation_date DATE,
    PRIMARY KEY(id)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
CREATE TABLE critere(
    id int NOT NULL AUTO_INCREMENT,
    difficulte INTEGER NOT NULL,
    deadline INTEGER NOT NULL,
    impact INTEGER NOT NULL,
    implication INTEGER NOT NULL,
    point_git INTEGER NOT NULL,
    PRIMARY KEY(id)
    
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE users(
   id int NOT NULL AUTO_INCREMENT,
   prenom varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(255) NOT NULL,
     PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE project_member(
    id int NOT NULL AUTO_INCREMENT,
    id_member int NOT NULL,
    id_project int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FOREIGN KEY (id_project) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (id_member) REFERENCES members(id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;



