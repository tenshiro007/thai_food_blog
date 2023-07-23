const express=require('express')
const router=express.Router()
const tagController=require('../controllers/tag')

router.get('/',tagController.getAll);
router.get('/:id',tagController.get);
router.post('/',tagController.create);
router.patch('/:id',tagController.update);
// router.delete('/:id',categoryController.deleteRecord);

module.exports=router;
