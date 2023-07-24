const express=require('express')
const router=express.Router()
const postTag=require('../controllers/post_tag')

router.get('/',postTag.getAll);
router.get('/:id',postTag.get);
router.post('/',postTag.create);
router.patch('/:id',postTag.update);
// router.delete('/:id',categoryController.deleteRecord);

module.exports=router;
