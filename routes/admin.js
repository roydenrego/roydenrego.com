var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', { layout: 'adminLayout.hbs', title: 'Royden Rego' });
});

module.exports = router;
