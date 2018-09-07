var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');

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
    res.send("Added"); //Replace with appropriate response
    
    Form.find(function(err, subs) {
      console.log(subs);
    });
    
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
  res.render('error', {title: '404 - Not Found'});
});

module.exports = app;
