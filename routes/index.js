var express = require('express');
var router = express.Router();

var controller = require('../controllers/index-controller');

/* GET home page. */
router.get('/', controller.index_get);

router.post('/submit', controller.submit_post);

module.exports = router;