CREATE DATABASE iteams;

CREATE TABLE membre(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    nom varchar(255) NOT NULL,
    prenom varchar(255) NOT NULL,
    user_github varchar(255) NOT NULL,
    fonction varchar(255) NOT NULL,
    pdc varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    password varchar(255) NOT NULL
);


CREATE TABLE projects(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai varchar(255) NOT NULL
);
CREATE TABLE criteres(
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