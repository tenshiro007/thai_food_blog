const express=require('express')
const router=express.Router()
const categoryController=require('../controllers/category')

router.get('/',categoryController.getAll);
router.get('/:id',categoryController.get);
router.post('/',categoryController.create);
router.patch('/:id',categoryController.update);
// router.delete('/:id',categoryController.deleteRecord);

module.exports=router;
