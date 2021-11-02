const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const ProjectCtrl = require('../controllers/project');

//poster un projet
router.post('/create', ProjectCtrl.create)

//Ajouter un membre à un projet
router.post('/addMember',ProjectCtrl.add);

//afficher tous les projet sans critere ni participant
router.get('/getAll',ProjectCtrl.listAll);



//afficher tous les projets avec leur critere
router.get('/ProjectCritere',ProjectCtrl.listAllWithCritere);

//aficher un projet avec son critere

router.get('/onewithcrit/:id',ProjectCtrl.listOneWithCritere);


//afficher tous les projets avec les membres qui y participent
router.get('/ProjectMember',ProjectCtrl.listAllWithMember);

//afficher un projet avec les participants
router.get('/onewithpart/:id',ProjectCtrl.listOneWithParticipant);

//afficher un projet sans critere ni participant
router.get('/:id',ProjectCtrl.getOne);

//get all valided
router.get("/valided/all",ProjectCtrl.listAllvalided)

//validate project
router.put('/valide/:id',ProjectCtrl.valideProject)


//Mettre à jour un projet
router.put('/update/:id',ProjectCtrl.update);

//Supprimer un projet
router.delete('/delete/:id',ProjectCtrl.del);




module.exports = router;