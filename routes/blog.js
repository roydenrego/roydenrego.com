var express = require('express');
var router = express.Router();
//var Post = require('../models/post');


/* GET home page. */
router.get('/', function(req, res, next) {
    var page = {
        title: 'Blog - Royden Rego',
        id: 'blog'
    }
    //Content.find(function(err, content) {
        res.render('blog', { title: page.title, rel_link: '/', page}); //, projects: content});
    //});
});

module.exports = router;