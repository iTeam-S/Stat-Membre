
CREATE DATABASE iteams;

CREATE TABLE members(
     id SERIAL PRIMARY KEY,
    nom varchar(255) NOT NULL,
    prenom varchar(255) NOT NULL,
    user_github varchar(255) NOT NULL,
    fonction varchar(255) NOT NULL,
    pdc varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    admin boolean NOT NULL,
    point_experience INTEGER,
    nombre_projet INTEGER 
);


CREATE TABLE project(
    id SERIAL PRIMARY KEY,
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai INTEGER NOT NULL,
    id_critere INTEGER NOT NULL,
    total_point INTEGER,
    total_participant INTEGER,
    valide BOOLEAN NOT NULL,
    creation_date DATE NOT NULL,
    validation_date DATE 
    
);
CREATE TABLE critere(
     id SERIAL PRIMARY KEY,
    difficulte INTEGER NOT NULL,
    deadline INTEGER NOT NULL,
    impact INTEGER NOT NULL,
    implication INTEGER NOT NULL,
    point_git INTEGER NOT NULL
);


CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   prenom varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(255) NOT NULL
);


CREATE TABLE project_member(
    id_member INTEGER NOT NULL,
    id_project INTEGER NOT NULL,
    PRIMARY KEY (id_member,id_project),
    FOREIGN KEY (id_project) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_member) REFERENCES members(id) ON DELETE CASCADE ON UPDATE CASCADE
);



