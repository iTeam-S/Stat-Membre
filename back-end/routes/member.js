const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const MemberCtrl = require('../controllers/member');

//Creer un membre
router.post('/create', MemberCtrl.create);

//afficher tous les projets aux quelles le membre participent
router.get('/:id/allproject',MemberCtrl.listAllMemberProject);

//Afficher tous les membres
router.get('/getAll',MemberCtrl.listAll);

//afficher tous les membres qui ont déjà des projets

router.get('/allonproject',MemberCtrl.listallonproject)

//Afficher un membre
router.get('/getOne/:id',MemberCtrl.getOne);

//Noter membre
router.post('/notermembre',MemberCtrl.NoterMembre)

//get topfive with their point

router.get('/point/gettopfive',MemberCtrl.getTopFive)

router.get('/getpdc/:id',MemberCtrl.getPdc)

//Mettre à jour un membre
router.put('/:id',MemberCtrl.update);

//Supprimer un membre
router.delete('/:id',MemberCtrl.del);


module.exports = router;