var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');

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
        title: 'Dashboard'
    }
    
    res.render('admin/admin', { layout: 'adminLayout.hbs', title: `Royden Rego - ${page.title}`, user, page });
});

module.exports = router;
