const express=require('express')
const router=express.Router()
const userController=require('../controllers/user')
// /**
//  * @openapi
//  * /:
//  *   get:
//  *     description: Welcome to swagger-jsdoc!
//  *     responses:
//  *       200:
//  *         description: Returns a mysterious string.
//  */
router.get('/',userController.getAll);
router.get('/:id',userController.get);
router.post('/',userController.create);
router.patch('/:id',userController.update);
// router.delete('/:id',userController.deleteRecord);

module.exports=router;
