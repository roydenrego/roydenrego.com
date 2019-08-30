//const { APP_NAME } = require('../config');
const gravatar = require('gravatar');

class Util {

    static getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    static clone(a) {
        return JSON.parse(JSON.stringify(a));
    }

    static arrayContains(element, array) {
        return (array.indexOf(element) > -1);
    }

    static randomString(length) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    static pushAll(arr, newArr) {
        newArr.forEach((ele) => {
            arr.push(ele);
        });
    }

    static renderErrorPage(req, res, errorCode, message) {
        var error = new Error(message);
        error.status = errorCode;
        res.locals.message = message;
        res.locals.error = error;
        res.status(errorCode);
        res.render('error', { layout: 'altLayout.hbs', title: `${error.status} ${message} - ${APP_NAME}`, error: { code: error.status, message } });
    }

    static auth(req, res) {
        if (!req.session.userId) {
            res.redirect('/admin/login');
            return null;
        }

        var secureUrl = gravatar.url(req.session.email, {s: '100', r: 'x', d: 'retro'}, true);

        var user = {
            name: req.session.name,
            email: req.session.email,
            username: req.session.username,
            profile_url: secureUrl
        }

        return user;
    }

    static api_auth(req, res) {
        if (!req.session.userId) {
            res.json({ statuscode: 100, status: 'Authentication failure'});
            return true;
        }
        return false;
    }

    static get_ext(filename) {
        var arr = filename.split('.');
        return arr[arr.length-1];
    }

}

module.exports = Util;