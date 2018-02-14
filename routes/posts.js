var express = require('express');
var router  = express.Router();
var postControllers    = require('../controllers/posts')
var auth = require('../helper/authanddecode')
var multer = require('multer')
var storage = multer.diskStorage({ 
    destination: 'uploads/', 
    filename: function (req, file, cb) {
        console.log(file.originalname,'---')
        cb(null, new Date().toISOString() +''+ file.originalname.slice(-6))
    }
})

var upload = multer({storage:storage})

router.post('/',auth,postControllers.createPost)
router.get('/',postControllers.findAll)
router.delete('/:id',auth,postControllers.deletePost)
router.put('/:id',auth,postControllers.editPost)
router.get('/:id',auth,postControllers.findOne)


router.post('/upload',upload.single('image'),postControllers.createTestImaageInput)

module.exports = router;
