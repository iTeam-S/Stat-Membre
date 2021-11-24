const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const MemberCtrl = require('../controllers/member');

//Creer un membre
router.post('/create', MemberCtrl.create);

//afficher tous les projets aux quelles le membre participent
router.get('/:membername/allproject',MemberCtrl.listAllMemberProject);

//Afficher tous les membres
router.get('/getAll',MemberCtrl.listAll);

//Afficher un membre
router.get('/getOne/:id',MemberCtrl.getOne);


//get topfive with their point

router.get('/point/gettopfive',MemberCtrl.getTopFive)

//Mettre à jour un membre
router.put('/:id',MemberCtrl.update);

//Supprimer un membre
router.delete('/:id',MemberCtrl.del);


module.exports = router;