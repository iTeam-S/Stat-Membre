const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const MemberCtrl = require('../controllers/member');

//Creer un membre
router.post('/', MemberCtrl.create)

//Afficher tous les membres
router.get('/All',MemberCtrl.listAll);

//Afficher un membre
router.get('/:id',MemberCtrl.getOne);

//Mettre à jour un membre
router.put('/:id',MemberCtrl.update);

//Supprimer un membre
router.delete('/:id',MemberCtrl.del)


module.exports = router;