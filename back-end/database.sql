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
    point_experience INTEGER
);


CREATE TABLE project(
    id SERIAL PRIMARY KEY,
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai INTEGER NOT NULL,
    id_critere INTEGER NOT NULL,
    total_point INTEGER
    
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
   prenom varchar(255) NOT NULL,
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
    FOREIGN KEY (id_project) REFERENCES project(id) ON UPDATE CASCADE,
    FOREIGN KEY (id_member) REFERENCES members(id) ON UPDATE CASCADE
);


{
    "nom":"RAMAMIHARIVELO",
    "prenom":"Marihasina",
    "user_github":"hasina821",
    "fonction":"devellopeur_junior",
    "pdc":"image",
    "mail":"rmnarry.mr@gmail.com",
    "admin":"false"


}
{
    "nom":"buildeo",
    "repos":"github",
    "delai":"4",
    "id_critere":"1"
}

{
    "difficulte":"5",
    "deadline":"5",
    "impact":"5",
    "implication":"5",
    "point_git":"5"
}
