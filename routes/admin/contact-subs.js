var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');
var Contact = require('../../models/contact');

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    if(!req.session.userId) {
        res.redirect('/admin/contact');
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
        title: 'Contact Submisions'
    }
    
    Contact.find({}).sort({'created': -1}).exec(function(err, content) {
        res.render('admin/contact-subs', { layout: 'adminLayout.hbs', title: `Royden Rego - ${page.title}`, user, page, subs: content });
    });
});

module.exports = router;
