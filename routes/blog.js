var express = require('express');
var router = express.Router();
//var Post = require('../models/post');


/* GET home page. */
router.get('/', function(req, res, next) {
    //Content.find(function(err, content) {
        res.render('blog', { title: 'Royden Rego', rel_link: '/'}); //, projects: content});
    //});
});

module.exports = router;