var express = require('express');
var router = express.Router();
var Content = require('../models/content');


/* GET home page. */
router.get('/', function(req, res, next) {

    var page = {
        title: 'Royden Rego',
        id: 'index'
    }

    Content.find(function(err, content) {
        res.render('index', { title: page.title, rel_link: '', page, projects: content});
    });
});

module.exports = router;