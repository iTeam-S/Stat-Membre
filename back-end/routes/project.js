const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const ProjectCtrl = require('../controllers/project');

//poster un projet
router.post('/create', ProjectCtrl.create)

//Ajouter un membre à un projet
router.post('/addMember',ProjectCtrl.add);

//Enlever une membre dans un projet

router.post('/remove',ProjectCtrl.deleteProjectMember)

router.get('/nbvalide',ProjectCtrl.getNombreValide)

router.get('/getnbencourspm',ProjectCtrl.getNombreEncoursPm)

router.get('/getnbprojetdmembre/:id',ProjectCtrl.getNombreProjetDumembre)

router.get('/getnbvalidepm',ProjectCtrl.getNombreValidePm)

router.get('/pourcentagev',ProjectCtrl.getPourcentageValide)
//afficher tous les projet sans critere ni participant
router.get('/getAll',ProjectCtrl.listAll);

router.get('/nbactif',ProjectCtrl.getNombreMembreActif)
//afficher all deployed project
router.get('/listAlldeployed',ProjectCtrl.listAlldeployed);



//afficher tous les projets avec les membres qui y participent
router.get('/ProjectMember',ProjectCtrl.listAllWithMember);

//afficher un projet avec les participants
router.get('/:id/part',ProjectCtrl.listOneWithParticipant);

router.get('/:id/partv',ProjectCtrl.listOneWithParticipantv)
//afficher un projet sans critere ni participant
router.get('/:id',ProjectCtrl.getOne);


//validate project
router.put('/valide/:id',ProjectCtrl.valideProject)


//Mettre à jour un projet
router.put('/update/:id',ProjectCtrl.update);

//Supprimer un projet
router.delete('/delete/:id',ProjectCtrl.del);


module.exports = router;