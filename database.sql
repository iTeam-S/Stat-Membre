
CREATE DATABASE iteams;

CREATE TABLE membre(
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
)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;

CREATE TABLE critere_membre(
    membre int NOT NULL,
    critere int NOT NULL,
    PRIMARY KEY (membre,critere),
    FOREIGN KEY (membre) REFERENCES critere(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (critere) REFERENCES membre(id) ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX(membre),
    INDEX(critere)

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


CREATE TABLE critere(
    id int NOT NULL AUTO_INCREMENT,
    difficulte INTEGER NOT NULL,
    deadline INTEGER NOT NULL,
    impact INTEGER NOT NULL,
    implication INTEGER NOT NULL,
    point_git INTEGER NOT NULL,
    PRIMARY KEY(id)
    
)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;


CREATE TABLE users(
   id int NOT NULL AUTO_INCREMENT,
   prenom varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(255) NOT NULL,
     PRIMARY KEY(id)
)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;


CREATE TABLE membre_projet(
    membre int NOT NULL,
    projet int NOT NULL,
    PRIMARY KEY (membre,projet),
    FOREIGN KEY (membre) REFERENCES projet(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (projet) REFERENCES membre(id) ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX(membre),
    INDEX(projet)
)ENGINE=INNODB DEFAULT CHARSET=utf8mb3;





