Ce repos contient le code de l'API pour le projet stat-Membre------------------------

il va de paire donc avec [le front-end](https://github.com/iTeam-S/Stat-Membre/tree/master/front-end).

-

## Lancer l'API en local

1. Il faut d'abord installez les `nodes_modules(npm init) pour tous les autres dependences`
2.configurez votre connection à la base de donne `dans le dossier service/connect(il est preferable de laisser votre option de configuration dans le .env)`
3.Tester votre connection
4.Creer tous les tables `vous pouvez les voir dans database.sql`
5.Completez les tables `à l'aide des body du chaque requete(à voir dans le readme) et les routes correspondant dans le dossiers routes(pour la table members et users seulement car il y a déjà l'interface avec le front-end)`
3. Faites tourner l'API ensuite avec `npm start`


## Partie front-end

1.installation `node-modules`
2.Config tailwind `pas tres compliqué`
3.npm initt `pour l'installation des autres dependances`
4.puis lancer avec `npm start`



## consommer l'API

------------------------------------------------------LES ROUTES-----------------------------------------------------------

## PROJECT:

-La route pour poster un projet
`POST api/v1/project/create`

**\* request body **\*\*\*\*\*:
{
"nom":"project's name",
"repos":"project's repos",
"delai":"project's delai",

}

-La route pour ajouter un membre à un projet
`POST api/v1/project/addMember`

**\* request body **\*\*\*\*\*:
{
"id_member":"id du membre",
"id_project":"id du project"
}

-La route pour afficher tous les projets avec leur critere
`GET api/v1/project/ProjectCritere`

-La route pour afficher un projet avec son critere

`GET api/v1/project/onewithcrit/:id`

-La route pour afficher tous les projets avec les membres qui y participent
`GET api/v1/project/ProjectMember`

-La route pour afficher un projet avec les participants
`GET api/v1/project/onewithpart/:id`

-La route pour afficher un projet sans critere ni participant
`GET api/v1/project/:id`

-La route pour afficher tous les projet sans critere ni participant
`GET api/v1/project/All`

-La route pour Mettre à jour un projet
`PUT api/v1/project/:id`

-La route pour supprimer un projet
`DELETE api/v1/project/:id`

## Membres:

-La route pour creer un membre
`POST api/v1/member/create`
**\* request body **\*\*\*\*\*:
{
"nom":"nom du membre",
"prenom":"prenom du membre",
"user_github":"pseudo github de l'utulisateur",
"fonction":"fonction du membre",
"pdc":"photo de profil du membre",
"mail":"l'addresse mail du membre",
"admin":"false if the membre is not a admin",
}

-La route pour afficher tous les membres
`GET api/v1/member/getAll`

-La route pour Afficher un membre
`GET api/v1/member/getOne/:id`

-La route pour afficher tous les projets aux quelles le membre participent

`GET api/v1/member/allproject/:id`

-La route pour fetcher tous les projet and member

`GET api/v1/member/allproject`

-La route pour fetcher les topfive avec leur point

`GET api/v1/member/point/gettopfive`

-La route pour Mettre à jour un membre
`PUT api/v1/member/:id`

-La route pour pour Supprimer un membre
`DELETE api/v1/member/:id`

## CRITERE:

-La route pour creer un critere
`POST api/v1/critere/create`

**\* request body **\*\*\*\*\*:
{
"difficulte":"difficulte",
"deadline":"deadline",
"impact":"impact",
"implication":"implication",
"point_git":"point_git"

}

-La route pour Afficher tous les criteres
`GET api/v1/critere/All`

-La route pour Affcher un critere
`GET api/v1/critere/:id`

-La route pour Mettre à jour un critere
`PUT api/v1/critere/:id`

-La route pour supprimer un critere
`DELETE api/v1/critere/:id`

## AUTHENTIFICATION:

-La route pour creer un nouveau compte
`POST api/v1/auth/signup`

**\* request body **\*\*\*\*\*:
{
"prenom":"username",
"email":"user'mail",
"password":"user password"

}

-La route pour s'authentifier
`POST api/v1/auth/signin`

**\* request body **\*\*\*\*\*:
{

"prenom":"username",
"email":"user'mail",
"password":"user password"

}

## ROLE :

-La route pour creer un role
`POST api/role/create`
**\* request body **\*\*\*\*\*:
{

"name":"role's name"

}

-La route pour assigner un role a un utulisateur

`POST api/role/giverole`:
-------request body-------:
{
"id_users":"user.id",
"id_role":"role.id"

}

-La route pour fetcher les utulisateurs d'un role
`GET api/role/:name`

-La route pour fetcher un utulisateur avec son role
`GET api/role/getuser/:prenom`

## CONTENU:

-La route pour voir le public content
`GET /api/content/all`
---->No role is required in this case

-La route pour voir user content

`GET /api/content/user`
----->User's role required

-La route pour voir l'admin dashboard
`GET /api/content/admin`
------>For the admin only(admin's role required)
