var express = require('express');
var router  = express.Router();
var postControllers    = require('../controllers/posts')

router.post('/',postControllers.createPost)
router.get('/',postControllers.findAll)

module.exports = router;
