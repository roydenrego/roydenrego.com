var express = require('express');
var router = express.Router();

var controller = require('../controllers/admin-controller');

/* GET home page. */
router.get('/', controller.home_get);

//Login Routes
router.get('/login', controller.login_get);
router.post('/login', controller.login_post);
router.get('/logout', controller.logout_get);


//Project Routes
router.get('/projects', controller.projects_get);

router.get('/new-project', controller.new_project_get);
router.post('/new-project', controller.new_project_post);

router.get('/edit-project', controller.edit_project_get);
router.post('/edit-project', controller.edit_project_post);

router.get('/messages', controller.messages_get);

module.exports = router;