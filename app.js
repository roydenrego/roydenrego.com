var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

var app = express();

require('dotenv').config();


mongoose.connect(process.env.DB_CONN);

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

//Handle contact form submission
app.post('/submit', function(req, res) {
  var data = req.body;
  
  if(!(data.fullname.trim()) || !(data.email.trim()) || !(data.message.trim())) {
    res.render('error', {title: 'Invalid Action'});
    return;
  }
  
  var Form = require('./models/contact');
  
  Form.create(data, function (err, small) {
    if (err) {
      res.render('error', {title: 'Something went wrong'});
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
      text: 'Hi ' + data.fullname + ', I have received your message and will revert back to you as soon as I can.' ,
      html: '<p>Hi ' + data.fullname + ',</p>' +
          '<p>I have received your message and will revert back to you as soon as I can.</p>' +
          '<p>Warm Regards<br>Royden Rego</p>' +
          '<p>Disclaimer: This is a automated message sent automatically by the system. Please do not reply to this email as there is no person monitoring this email address.</p>',
    };
    sgMail.send(usrMsg);
    
    //Send JSON response
    res.json({statuscode: 200, status: "Contact Form submission successfull"});
    
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
  res.render('error', {title: '404 - Not Found', rel_link: '/'});
});

module.exports = app;
