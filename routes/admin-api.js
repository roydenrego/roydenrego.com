var express = require('express');
var router = express.Router();
const multer = require('multer');

var controller = require('../controllers/admin-api-controller');

//Analytics API Endpoints
router.post('/stats/short', controller.analytics_short_stats);
router.post('/stats/users', controller.analytics_user_stats);
router.post('/stats/extra', controller.analytics_extra_stats);

const upload = multer();

router.get('/media/list', controller.media_list);
router.post('/media/upload', upload.single('upload'), controller.media_upload);

router.post('/project/delete', controller.project_delete);

router.post('/messages/delete', controller.message_delete);

module.exports = router;