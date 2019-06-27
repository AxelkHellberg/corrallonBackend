import { createConnection } from "typeorm";
import { checkJwt } from "./middlewares/checkJwt";
import { validatePermissionsEntity } from "./middlewares/validatePermissionsEntity";
import { validatePermissionsReports } from "./middlewares/validatePermissionsReports";
import { test } from "./middlewares/test";
import { authorizationDecision } from "./middlewares/authorizationDecision";
import { validatePermissionsUser } from "./middlewares/validatePermissionUser";
import { checkPublicService } from "./middlewares/checkPublicService";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const functions = require('firebase-functions')
const bodyParser = require('body-parser')
const ENTITIES_BASE_URL = "entities"

const appOnPremise = express();

// view engine setup
appOnPremise.use(logger('dev'));
appOnPremise.use(express.json());
appOnPremise.use(express.urlencoded({ extended: false }));
appOnPremise.use(cookieParser());
appOnPremise.use(express.static(path.join(__dirname, 'public')));
appOnPremise.use(bodyParser.urlencoded({ extended: true }));
appOnPremise.use(bodyParser.json());

appOnPremise.use(express.static(path.join(__dirname, 'public')));

const auth = require('./routes/authRoutes');
const reports = require('./routes/reportsRoutes');
const genericEntitiesServicePath = [] //all services that need the same validation path
genericEntitiesServicePath.push({ "route": require('./routes/usersRoutes'), "serviceName": "users" })
genericEntitiesServicePath.push({ "route": require('./routes/plantasRoutes'), "serviceName": "plantas" })
genericEntitiesServicePath.push({ "route": require('./routes/sistemasRoutes'), "serviceName": "sistemas" })
genericEntitiesServicePath.push({ "route": require('./routes/tagsRoutes'), "serviceName": "tags" })
genericEntitiesServicePath.push({ "route": require('./routes/equipamientosRoutes'), "serviceName": "equipamientos" })
genericEntitiesServicePath.push({ "route": require('./routes/guiasManiobrasRoutes'), "serviceName": "guias-maniobra" })
genericEntitiesServicePath.push({ "route": require('./routes/camposManiobraRoutes'), "serviceName": "campos-maniobra" })
genericEntitiesServicePath.push({ "route": require('./routes/valoresCamposManiobrasRoutes'), "serviceName": "valores-campos-maniobra" })
genericEntitiesServicePath.push({ "route": require('./routes/plantillaGuiaManiobraRoutes'), "serviceName": "plantillas-guias-maniobra" })
genericEntitiesServicePath.push({ "route": require('./routes/unidadMedidaRoutes'), "serviceName": "unidades-medida" })
genericEntitiesServicePath.push({ "route": require('./routes/tipoCampoRondaRoutes'), "serviceName": "tipos-campo-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/estadoRondaRoutes'), "serviceName": "estados-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/horarioRoutes'), "serviceName": "horarios" })
genericEntitiesServicePath.push({ "route": require('./routes/camposRondaRoutes'), "serviceName": "campos-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/rondasRoutes'), "serviceName": "rondas" })
genericEntitiesServicePath.push({ "route": require('./routes/plantillasRonda'), "serviceName": "plantillas-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/valoresCamposRondaRoutes'), "serviceName": "rondas" })
genericEntitiesServicePath.push({ "route": require('./routes/rondasRoutes'), "serviceName": "rondas" })
genericEntitiesServicePath.push({ "route": require('./routes/valoresCamposRondaRoutes'), "serviceName": "valores-campos-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/plantillasRonda'), "serviceName": "plantillas-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/listasRondaRoutes'), "serviceName": "listas-rondas" })

appOnPremise.use('/auth', auth);
appOnPremise.use('/reports', [checkJwt, validatePermissionsReports, authorizationDecision], reports);
for (let service of genericEntitiesServicePath) {
  appOnPremise.use('/' + ENTITIES_BASE_URL + '/' + service.serviceName, [checkPublicService, checkJwt, validatePermissionsEntity, validatePermissionsUser, authorizationDecision], service.route, [test]);
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