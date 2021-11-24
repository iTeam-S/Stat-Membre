Ce repo contient le code de l'API pour le projet stat-Membre------------------------

il va de paire donc avec [le front-end](https://github.com/iTeam-S/Stat-Membre/tree/master/front-end).

-

## Lancer l'API en local

1. Il faut d'abord installez les `nodes_modules`
2. Faites tourner l'API ensuite avec `npm start`

## consommer l'API

------------------------------------------------------LES ROUTES-----------------------------------------------------------

## PROJECT:

-La route pour poster un projet
`POST api/project/create`

**\* request body **\*\*\*\*\*:
{
"nom":"project's name",
"repos":"project's repos",
"delai":"project's delai",
"id_critere":"critere.id assigned to the project"
}

-La route pour ajouter un membre à un projet
`POST api/project/addMember`

**\* request body **\*\*\*\*\*:
{
"id_member":"id du membre",
"id_project":"id du project"
}

-La route pour afficher tous les projets avec leur critere
`GET api/project/ProjectCritere`

-La route pour afficher un projet avec son critere

`GET api/project/onewithcrit/:id`

-La route pour afficher tous les projets avec les membres qui y participent
`GET api/project/ProjectMember`

-La route pour afficher un projet avec les participants
`GET api/project/onewithpart/:id`

-La route pour afficher un projet sans critere ni participant
`GET api/project/:id`

-La route pour afficher tous les projet sans critere ni participant
`GET api/project/All`

-La route pour Mettre à jour un projet
`PUT api/project/:id`

-La route pour supprimer un projet
`DELETE api/project/:id`

## Membres:

-La route pour creer un membre
`POST api/member/create`
**\* request body **\*\*\*\*\*:
{
"nom":"nom du membre",
"prenom":"prenom du membre",
"user_github":"pseudo github de l'utulisateur",
"fonction":"fonction du membre",
"pdc":"photo de profil du membre",
"mail":"l'addresse mail du membre",
"admin":"false if the membre is not a admin",
"point_experience":"always null"
}

-La route pour afficher tous les membres
`GET api/member/getAll`

-La route pour Afficher un membre
`GET api/member/getOne/:id`

-La route pour afficher tous les projets aux quelles le membre participent

`GET api/member/allproject/:id`

-La route pour fetcher tous les projet and member

`GET api/member/allproject`

-La route pour fetcher les topfive avec leur point

`GET api/member/point/gettopfive`

-La route pour Mettre à jour un membre
`PUT api/member/:id`

-La route pour pour Supprimer un membre
`DELETE api/member/:id`

## CRITERE:

-La route pour creer un critere
`POST api/critere/create`

**\* request body **\*\*\*\*\*:
{
"difficulte":"difficulte",
"deadline":"deadline",
"impact":"impact",
"implication":"implication",
"point_git":"point_git"

}

-La route pour Afficher tous les criteres
`GET api/critere/All`

-La route pour Affcher un critere
`GET api/critere/:id`

-La route pour Mettre à jour un critere
`PUT api/critere/:id`

-La route pour supprimer un critere
`DELETE api/critere/:id`

## AUTHENTIFICATION:

-La route pour creer un nouveau compte
`POST api/auth/signup`

**\* request body **\*\*\*\*\*:
{
"prenom":"username",
"email":"user'mail",
"password":"user password"

}

-La route pour s'authentifier
`POST api/auth/signin`

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
