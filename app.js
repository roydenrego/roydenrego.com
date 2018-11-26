var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const AWS = require('aws-sdk');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const multer = require('multer');
const Util = require('./helpers/util');

var indexRouter = require('./routes/index');

//Admin Routers
var adminRouter = require('./routes/admin');
var adminLoginRouter = require("./routes/admin/login");
var adminProjectRouter = require('./routes/admin/projects');
var adminEditProjectRouter = require('./routes/admin/edit-project');
var adminNewProjectRouter = require('./routes/admin/new-project');
var adminContactRouter = require('./routes/admin/contact-subs');

var app = express();

require('dotenv').config();

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
})

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  helpers: require("./helpers/hbs-helper.js").helpers
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use sessions for tracking logins
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/admin/login', adminLoginRouter);
app.use('/admin/projects', adminProjectRouter);
app.use('/admin/edit-project', adminEditProjectRouter);
app.use('/admin/new-project', adminNewProjectRouter);
app.use('/admin/contact', adminContactRouter);

//Handle contact form submission
app.post('/submit', function(req, res) {
  var data = req.body;

  if (!(data.fullname.trim()) || !(data.email.trim()) || !(data.message.trim())) {
    res.render('error', { title: 'Invalid Action' });
    return;
  }

  var Form = require('./models/contact');

  Form.create(data, function(err, small) {
    if (err) {
      res.render('error', { title: 'Something went wrong' });
      return;
    }

    //Send email
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'roydenrego@softrixz.com',
      from: {
        'name': 'Royden Rego',
        'email': 'no-reply@roydenrego.com',
      },
      subject: 'Royden Rego - ContactForm',
      text: 'You have a new contact form submission',
      html: '<p>You have a new contact form submission</p>' +
        '<p>Full Name: ' + data.fullname + '</p>' +
        '<p>Email: ' + data.email + '</p>' +
        '<p>Message: ' + data.message + '</p>',
    };
    sgMail.send(msg);

    const usrMsg = {
      to: data.email,
      from: {
        'name': 'Royden Rego',
        'email': 'no-reply@roydenrego.com',
      },
      subject: 'Contact Form - Royden Rego',
      text: 'Hi ' + data.fullname + ', I have received your message and will revert back to you as soon as I can.',
      html: '<p>Hi ' + data.fullname + ',</p>' +
        '<p>I have received your message and will revert back to you as soon as I can.</p>' +
        '<p>Warm Regards<br>Royden Rego</p>' +
        '<p>Disclaimer: This is a automated message sent automatically by the system. Please do not reply to this email as there is no person monitoring this email address.</p>',
    };
    sgMail.send(usrMsg);

    //Send JSON response
    res.json({ statuscode: 200, status: "Contact Form submission successfull" });

  });

});

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

  var User = require('./models/user');

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
          console.log(`Name: ${user.name}`);
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

  var Content = require('./models/content');

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

  var Content = require('./models/content');

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

  var Content = require('./models/content');

  Content.deleteOne({ _id: data.id }, function(err) {
    if (err) {
      res.json({statuscode: 120, status: "There an error in deleting the project"});
      return;
    }
    res.json({statuscode: 200, status: "Successfully deleted the project"});
  });
});


app.post('/admin/delete-contact', function(req, res) {
  if (!req.session.userId) {
    res.json({ statuscode: 400, status: "Bad Request" });
    return;
  }

  var data = req.body;

  var Contact = require('./models/contact');

  Contact.deleteOne({ _id: data.id }, function(err) {
    if (err) {
      res.json({statuscode: 120, status: "There an error in deleting the submission"});
      return;
    }
    res.json({statuscode: 200, status: "Successfully deleted the submission"});
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: '404 - Not Found', rel_link: '/' });
});

module.exports = app;
