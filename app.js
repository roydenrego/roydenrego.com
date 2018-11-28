var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
const AWS = require('aws-sdk');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

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

var indexController = require('./controllers');
indexController.set(app);

var adminController = require('./controllers/admin');
adminController.set(app,s3);

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
  console.log(err.message);
  res.render('error', { title: '404 - Not Found', rel_link: '/' });
});

module.exports = app;
