const multer = require('multer');
const Util = require('../helpers/util');

module.exports.set = function(app, s3) {

    //Admin Routers
    var adminRouter = require('../routes/admin');
    var adminLoginRouter = require("../routes/admin/login");
    var adminProjectRouter = require('../routes/admin/projects');
    var adminEditProjectRouter = require('../routes/admin/edit-project');
    var adminNewProjectRouter = require('../routes/admin/new-project');
    var adminContactRouter = require('../routes/admin/contact-subs');
    
    app.use('/admin', adminRouter);
    app.use('/admin/login', adminLoginRouter);
    app.use('/admin/projects', adminProjectRouter);
    app.use('/admin/edit-project', adminEditProjectRouter);
    app.use('/admin/new-project', adminNewProjectRouter);
    app.use('/admin/contact', adminContactRouter);

    //Handle admin login
    app.post('/admin/login', function(req, res) {

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
            .exec(function(err, user) {
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

                bcrypt.compare(password, user.password, function(err, result) {
                    if (result === true) {
                        req.session.userId = user._id;
                        req.session.email = user.email;
                        req.session.username = user.username;
                        req.session.name = user.name;
                        console.log(`Logged In User: ${user.email}`);
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

    });

    app.get('/admin/logout', function(req, res) {
        req.session.destroy();
        res.redirect('/admin/login?logout=true');
    });

    app.get('/admin/getimages', function(req, res) {

        if (!req.session.userId) {
            res.json({ statuscode: 400, status: "Bad Request" });
            return;
        }

        var params = {
            Bucket: 'roydenrego',
            Delimiter: '/',
            Prefix: 'content/'
        }
        s3.listObjects(params, function(err, data) {
            if (err) throw err;

            var objects = [];

            for (var k in data.Contents) {
                if (data.Contents[k].Key == 'content/')
                    continue;
                objects.push({ image: `https://s3-ap-southeast-1.amazonaws.com/roydenrego/${data.Contents[k].Key}` });
            }
            res.json(objects);
        });
    });

    const upload = multer();

    app.post('/admin/uploadimage', upload.single('upload'), function(req, res, next) {

        if (!req.session.userId) {
            res.json({ statuscode: 400, status: "Bad Request" });
            return;
        }

        var fileName = Util.random_string(20) + '.' + Util.get_ext(req.file.originalname);

        const params = {
            Bucket: 'roydenrego', // pass your bucket name
            Key: `content/${fileName}`, // file will be saved as testBucket/contacts.csv
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
            ACL: 'public-read'
        };
        s3.upload(params, function(s3Err, data) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`);
            res.json({ uploaded: 1, fileName: fileName, url: data.Location });
        });
    });

    app.post('/admin/edit-project', function(req, res) {

        if (!req.session.userId) {
            res.json({ statuscode: 400, status: "Bad Request" });
            return;
        }

        var data = req.body;

        var Content = require('../models/content');

        Content.updateOne({ _id: data.id }, data, function(err, dbres) {
            res.redirect(`/admin/edit-project?id=${data.id}`);
        });

    });

    app.post('/admin/new-project', function(req, res) {

        if (!req.session.userId) {
            res.json({ statuscode: 400, status: "Bad Request" });
            return;
        }

        var data = req.body;

        var Content = require('../models/content');

        Content.create(data, function(err, proj) {
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

    });

    app.post('/admin/delete-project', function(req, res) {
        if (!req.session.userId) {
            res.json({ statuscode: 400, status: "Bad Request" });
            return;
        }

        var data = req.body;

        var Content = require('../models/content');

        Content.deleteOne({ _id: data.id }, function(err) {
            if (err) {
                res.json({ statuscode: 120, status: "There an error in deleting the project" });
                return;
            }
            res.json({ statuscode: 200, status: "Successfully deleted the project" });
        });
    });


    app.post('/admin/delete-contact', function(req, res) {
        if (!req.session.userId) {
            res.json({ statuscode: 400, status: "Bad Request" });
            return;
        }

        var data = req.body;

        var Contact = require('../models/contact');

        Contact.deleteOne({ _id: data.id }, function(err) {
            if (err) {
                res.json({ statuscode: 120, status: "There an error in deleting the submission" });
                return;
            }
            res.json({ statuscode: 200, status: "Successfully deleted the submission" });
        });
    });
}
