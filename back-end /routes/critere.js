const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const CritereCtrl = require('../controllers/critere');

//Creer un critere
router.post('/create', CritereCtrl.create)

//Afficher tous les criteres
router.get('/getAll',CritereCtrl.listAll);

//Affcher un critere
router.get('/:id',CritereCtrl.getOne);

//Mettre à jour un critere
router.put('/update/:id',CritereCtrl.update);

//Supprimer un critere
router.delete('/:id',CritereCtrl.del)


module.exports = router;