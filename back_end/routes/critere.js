const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const CritereCtrl = require('../controllers/critere');

//Creer un critere
router.post('/', CritereCtrl.create)

//Afficher tous les criteres
router.get('/All',CritereCtrl.listAll);

//Affcher un critere
router.get('/:id',CritereCtrl.getOne);

//Mettre à jour un critere
router.put('/:id',CritereCtrl.update);

//Supprimer un critere
router.delete('/:id',CritereCtrl.del)


module.exports = router;