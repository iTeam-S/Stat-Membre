const roleCtrl=require("../controllers/role");
const express=require('express');
const router=express.Router()

//create a role
router.post('/',roleCtrl.createRole)

//give role to user

router.post('/giverole',roleCtrl.createUserRole);


//get the role's user
router.get('/:name',roleCtrl.getRoleUser)


//get user with his role

router.get('/getuser/:prenom',roleCtrl.getUserWithRoles);




module.exports = router;