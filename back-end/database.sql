-------------------------DATABASE CREATION-------------------------
CREATE DATABASE iteams;

CREATE TABLE members(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    nom varchar(255) NOT NULL,
    prenom varchar(255) NOT NULL,
    user_github varchar(255) NOT NULL,
    fonction varchar(255) NOT NULL,
    pdc varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    admin boolean NOT NULL
);


CREATE TABLE project(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai varchar(255) NOT NULL
);
CREATE TABLE critere(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    difficulte varchar(255) NOT NULL,
    deadline date NOT NULL,
    impact varchar(255) NOT NULL,
    implication varchar(255) NOT NULL,
    point_git numeric NOT NULL,
    id_project numeric NOT NULL,
    id_membre numeric NOT NULL
);
CREATE TABLE roles(
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  name varchar(255) NOT NULL
);
CREATE TABLE users(
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL
);