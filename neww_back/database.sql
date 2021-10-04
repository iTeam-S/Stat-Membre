CREATE DATABASE iteams;

CREATE TABLE members(
     id SERIAL PRIMARY KEY,
    nom varchar(255) NOT NULL,
    prenom varchar(255) NOT NULL,
    user_github varchar(255) NOT NULL,
    fonction varchar(255) NOT NULL,
    pdc varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    admin boolean NOT NULL
);


CREATE TABLE project(
    id SERIAL PRIMARY KEY,
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai varchar(255) NOT NULL,
    id_critere INTEGER NOT NULL
    
);
CREATE TABLE critere(
     id SERIAL PRIMARY KEY,
    difficulte INTEGER NOT NULL,
    deadline INTEGER NOT NULL,
    impact INTEGER NOT NULL,
    implication INTEGER NOT NULL,
    point_git INTEGER NOT NULL
);
CREATE TABLE role(
   id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL
);
CREATE TABLE users(
   id SERIAL PRIMARY KEY,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL
);
CREATE TABLE user_role(
    id_role INTEGER NOT NULL,
    id_users INTEGER NOT NULL,
    PRIMARY KEY (id_role,id_users),
    FOREIGN KEY (id_role) REFERENCES role(id) ON UPDATE CASCADE,
    FOREIGN KEY (id_users) REFERENCES users(id) ON UPDATE CASCADE

);

CREATE TABLE project_member(
    id_member INTEGER NOT NULL,
    id_project INTEGER NOT NULL,
    PRIMARY KEY (id_member,id_project),
    FOREIGN KEY (id_project) REFERENCES peoject(id) ON UPDATE CASCADE,
    FOREIGN KEY (id_member) REFERENCES member(id) ON UPDATE CASCADE
);

