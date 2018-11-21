var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');
var Content = require('../../models/content');

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    if(!req.session.userId) {
        res.redirect('/admin/login');
        return;
    }
    
    var secureUrl = gravatar.url(req.session.email, {s: '100', r: 'x', d: 'retro'}, true);

    var user = {
        name: req.session.name,
        email: req.session.email,
        username: req.session.username,
        profile_url: secureUrl
    }
    
    var page = {
        title: 'Projects'
    }
    
    Content.find(function(err, content) {
        res.render('admin/projects', { layout: 'adminLayout.hbs', title: `Royden Rego - ${page.title}`, user, page, projects: content });
    });
});

module.exports = router;
