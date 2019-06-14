import { createConnection } from "typeorm";
import { checkJwt } from "./middlewares/checkJwt";
import { validatePermissions } from "./middlewares/validatePermissions";
const apiHandler = require("./components/apiHandler")

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const functions = require('firebase-functions')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')


var appOnPremise = express();

// view engine setup
appOnPremise.use(logger('dev'));
appOnPremise.use(express.json());
appOnPremise.use(express.urlencoded({ extended: false }));
appOnPremise.use(cookieParser());
appOnPremise.use(express.static(path.join(__dirname, 'public')));
appOnPremise.use(bodyParser.urlencoded({ extended: true }));
appOnPremise.use(bodyParser.json());

appOnPremise.use(express.static(path.join(__dirname, 'public')));


var users = require('./routes/usersRoutes');
var auth = require('./routes/authRoutes');

appOnPremise.use('/entities', [checkJwt, validatePermissions], users);
appOnPremise.use('/auth', auth);

// catch 404 and forward to error handler
appOnPremise.use(function (req, res, next) {
  next(createError(404));
});

// error handler
appOnPremise.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

createConnection().then((c) => console.log("OK CONNECTION")).catch((e) => console.log(e))
let cloudFunction = null
try {
  cloudFunction = functions.https.onRequest(appOnPremise)
} catch (e) { }
export = { cloudFunction, appOnPremise }


