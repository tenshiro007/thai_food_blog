const express=require('express')
const router=express.Router()
const postController=require('../controllers/post')

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/data/uploads/');
  },
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniquePrefix + fileExtension);
  },
});
const upload = multer({ storage: storage });


router.get('/',postController.getAll);
router.get('/:id',postController.get);
router.post('/',postController.create);
router.patch('/:id',postController.update);
// router.delete('/:id',categoryController.deleteRecord);

router.post('/image',upload.single('image'),postController.uploadSingleImage);
router.post('/images',upload.array('images', 5),postController.uploadManyImage);

module.exports=router;
