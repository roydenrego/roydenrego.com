var express = require('express');
var router = express.Router();

/* GET Admin Login Page */
router.get('/', function(req, res, next) {
    
    if(req.session.userId) {
        res.redirect('/admin');
        return;
    }
    
    var data = req.body;
    const err = req.session.error? true : false;
    delete req.session.error;
    res.render('admin/adminLogin', { layout: 'adminLoginLayout.hbs', title: 'Royden Rego - Admin Login', login_error: err});
});

module.exports = router;
