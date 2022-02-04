
CREATE DATABASE iteams;

CREATE TABLE membre(
    id int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    prenom varchar(255) NOT NULL,
    user_github varchar(255) NOT NULL,
    fonction varchar(255) NOT NULL,
    pdc varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    point_experience INTEGER,
    nombre_projet INTEGER,
    password varchar(255) NOT NULL,
    role varchar(255) NOT NULL,
    PRIMARY KEY(id)
)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;



CREATE TABLE projet(
    id int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    repos varchar(255) NOT NULL,
    delai INTEGER NOT NULL,
    total_participant INTEGER,
    valide BOOLEAN NOT NULL,
    creation_date timestamp NOT NULL,
    validation_date timestamp NULL DEFAULT NULL,
    PRIMARY KEY(id)

)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;




CREATE TABLE membre_projet(
    id_membre int NOT NULL,
    id_projet int NOT NULL,
    difficulte INTEGER DEFAULT  NULL,
    deadline INTEGER DEFAULT NULL,
    impact INTEGER DEFAULT NULL,
    implication INTEGER DEFAULT NULL,
    point_git INTEGER DEFAULT NULL,
    PRIMARY KEY (id_membre,id_projet),
    FOREIGN KEY (id_membre) REFERENCES projet(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_projet) REFERENCES membre(id) ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX(id_membre),
    INDEX(id_projet)
)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;





