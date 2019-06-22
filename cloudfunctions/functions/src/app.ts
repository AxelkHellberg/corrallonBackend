import { createConnection } from "typeorm";
import { checkJwt } from "./middlewares/checkJwt";
import { validatePermissionsEntity } from "./middlewares/validatePermissionsEntity";
import { validatePermissionsReports } from "./middlewares/validatePermissionsReports";
import { test } from "./middlewares/test";
import { authorizationDecision } from "./middlewares/authorizationDecision";
import { validatePermissionsUser } from "./middlewares/validatePermissionUser";
import { checkPublicService } from "./middlewares/checkPublicService";

const apiHandler = require("./components/apiHandler")

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const functions = require('firebase-functions')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const ENTITIES_BASE_URL = "entities"

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

var auth = require('./routes/authRoutes');
var reports = require('./routes/reportsRoutes');
let genericEntitiesServicePath = [] //all services that need the same validation path
genericEntitiesServicePath.push({ "route": require('./routes/usersRoutes'), "serviceName": "users" })
genericEntitiesServicePath.push({ "route": require('./routes/plantasRoutes'), "serviceName": "plantas" })
genericEntitiesServicePath.push({ "route": require('./routes/sistemasRoutes'), "serviceName": "sistemas" })
genericEntitiesServicePath.push({ "route": require('./routes/tagsRoutes'), "serviceName": "tags" })
genericEntitiesServicePath.push({ "route": require('./routes/equipamientosRoutes'), "serviceName": "equipamientos" })

appOnPremise.use('/auth', auth);
appOnPremise.use('/reports', [checkJwt, validatePermissionsReports, authorizationDecision], reports);
for (let i: number = 0; i < genericEntitiesServicePath.length; i++) {
  const cEntity = genericEntitiesServicePath[i]
  appOnPremise.use('/' + ENTITIES_BASE_URL + '/' + cEntity.serviceName, [checkPublicService, checkJwt, validatePermissionsEntity, validatePermissionsUser, authorizationDecision], cEntity.route, [test]);
}

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