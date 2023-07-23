const express=require('express')
const router=express.Router()
const userController=require('../controllers/user')

router.get('/',userController.getAll);
router.get('/:id',userController.get);
router.post('/',userController.create);

module.exports=router;
