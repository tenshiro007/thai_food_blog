const express=require('express')
const router=express.Router()
const postComment=require('../controllers/post_comment')

router.get('/',postComment.getAll);
router.get('/:id',postComment.get);
router.post('/',postComment.create);
router.patch('/:id',postComment.update);
// router.delete('/:id',categoryController.deleteRecord);

module.exports=router;
