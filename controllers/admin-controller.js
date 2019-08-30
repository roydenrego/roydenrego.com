const { APP_NAME } = require('../config');
const Util = require('../util');

const Project = require('../models/content');
const Contact = require('../models/contact');

module.exports.login_get = (req, res) => {
    if (req.session.userId) {
        res.redirect('/admin');
        return;
    }

    const err = req.session.error ? true : false;
    delete req.session.error;

    const logout = req.query.logout ? true : false;

    res.render('admin/login', { layout: 'adminLoginLayout.hbs', title: `${APP_NAME} - Admin Login`, login_error: err, logout });
}

//Handle admin login
module.exports.login_post = (req, res) => {
    var data = req.body;

    var email = data.email.trim();
    var password = data.password.trim();

    if (!email || !password) {
        var error = new Error('Bad Request');
        error.status = 400;
        res.locals.message = 'Bad Request';
        res.locals.error = error;
        res.status(400);
        res.render('error', { title: 'Invalid Action', rel_link: '/' });
        return;
    }

    var User = require('../models/user');

    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                res.json({ statuscode: 400 });
                return;
            }
            else if (!user) {
                req.session.error = true;
                res.redirect('/admin/login');
                return;
            }

            const bcrypt = require('bcrypt');

            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    req.session.userId = user._id;
                    req.session.email = user.email;
                    req.session.username = user.username;
                    req.session.name = user.name;

                    res.redirect('/admin');
                    return;
                }
                else {
                    req.session.error = true;
                    res.redirect('/admin/login');
                    return;
                }
            });

        });
}

module.exports.logout_get = (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login?logout=true');
};

module.exports.home_get = (req, res) => {
    var user = Util.auth(req, res);
    if (!user) {
        return;
    }

    var page = {
        title: 'Dashboard'
    }

    res.render('admin/home', { layout: 'adminLayout.hbs', title: `${APP_NAME} - ${page.title}`, user, page });
};

module.exports.projects_get = (req, res) => {
    var user = Util.auth(req, res);
    if (!user) {
        return;
    }

    var page = {
        title: 'Projects'
    }

    Project.find({})
        .sort({ created: -1 })
        .exec(function (err, projects) {
            res.render('admin/projects', { layout: 'adminLayout.hbs', title: `${APP_NAME} - ${page.title}`, user, page, projects });
        });
};

module.exports.edit_project_get = (req, res) => {
    var user = Util.auth(req, res);
    if (!user) {
        return;
    }

    var page = {
        title: 'Edit Project'
    }

    Project.findOne({ _id: req.query.id })
        .exec(function (err, project) {
            res.render('admin/edit-project', { layout: 'adminLayout.hbs', title: `${page.title} - ${APP_NAME}`, user, page, project });
        });
};

module.exports.edit_project_post = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var data = req.body;

    Project.updateOne({ _id: data.id }, data, function (err, dbres) {
        res.redirect(`/admin/edit-project?id=${data.id}`);
    });
};

module.exports.new_project_get = (req, res) => {
    var user = Util.auth(req, res);
    if (!user) {
        return;
    }

    var page = {
        title: 'New Project'
    }

    res.render('admin/new-project', { layout: 'adminLayout.hbs', title: `${page.title} - ${APP_NAME}`, user, page });
};

module.exports.new_project_post = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var data = req.body;

    Project.create(data, function (err, proj) {
        if (err) {
            var error = new Error('Bad Request');
            error.status = 400;
            res.locals.message = err.message;
            res.locals.error = error;
            res.status(400);
            res.render('error', { title: 'Invalid Action', rel_link: '/' });
            return;
        }
        res.redirect(`/admin/edit-project?id=${proj._id}`);
    });

};

module.exports.messages_get = (req, res) => {
    var user = Util.auth(req, res);
    if (!user) {
        return;
    }

    var page = {
        title: 'Messages'
    }

    Contact.find({}).sort({ 'created': -1 }).exec(function (err, messages) {
        res.render('admin/messages', { layout: 'adminLayout.hbs', title: `${APP_NAME} - ${page.title}`, user, page, messages });
    });
};