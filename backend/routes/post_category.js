const express=require('express')
const router=express.Router()
const postCategory=require('../controllers/post_category')

router.get('/',postCategory.getAll);
router.get('/:id',postCategory.get);
router.post('/',postCategory.create);
router.patch('/:id',postCategory.update);
// router.delete('/:id',categoryController.deleteRecord);

module.exports=router;
