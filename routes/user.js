const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

/* GET or CREATE User*/
router.post('/', userController.findOrCreate);

module.exports = router;
