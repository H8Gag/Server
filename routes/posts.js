var express = require('express');
var router  = express.Router();
var postControllers    = require('../controllers/posts')
var auth = require('../helper/authanddecode')

router.post('/',auth,postControllers.createPost)
router.get('/',postControllers.findAll)
router.delete('/:id',auth,postControllers.deletePost)
router.put('/:id',auth,postControllers.editPost)
router.get('/:id',auth,postControllers.findOne)

module.exports = router;
