var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');
var Content = require('../../models/content');

/* GET users listing. */
router.get('/', function(req, res, next) {

    if (!req.session.userId) {
        res.redirect('/admin/login');
        return;
    }

    var secureUrl = gravatar.url(req.session.email, { s: '100', r: 'x', d: 'retro' }, true);

    var user = {
        name: req.session.name,
        email: req.session.email,
        username: req.session.username,
        profile_url: secureUrl
    }

    var page = {
        title: 'New Project'
    }

    
    res.render('admin/new-project', { layout: 'adminLayout.hbs', title: `${page.title} - Royden Rego`, user, page });
    
});

module.exports = router;