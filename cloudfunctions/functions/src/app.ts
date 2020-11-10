import { createConnection } from "typeorm";
import { checkJwt } from "./middlewares/checkJwt";
import { validatePermissionsEntity } from "./middlewares/validatePermissionsEntity";
import { validatePermissionsReports } from "./middlewares/validatePermissionsReports";
import { test } from "./middlewares/test";
import { authorizationDecision } from "./middlewares/authorizationDecision";
import { validatePermissionsUser } from "./middlewares/validatePermissionUser";
import { checkPublicService } from "./middlewares/checkPublicService";
import { corsHandler } from "./middlewares/corsHandler";
import { createNewConnection } from "./middlewares/createNewConnection";
var cors = require('cors')

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const functions = require('firebase-functions')
const bodyParser = require('body-parser')
const ENTITIES_BASE_URL = "entities"

const appOnPremise = express();

appOnPremise.use(cors());
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
genericEntitiesServicePath.push({ "route": require('./routes/rondasRoutes'), "serviceName": "rondas" })
genericEntitiesServicePath.push({ "route": require('./routes/valoresCamposRondaRoutes'), "serviceName": "valores-campos-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/plantillasRonda'), "serviceName": "plantillas-ronda" })
genericEntitiesServicePath.push({ "route": require('./routes/listasRondaRoutes'), "serviceName": "listas-rondas" })
genericEntitiesServicePath.push({ "route": require('./routes/TipoFallaRoutes'), "serviceName": "tipos-falla" })
genericEntitiesServicePath.push({ "route": require('./routes/NotificacionFallaRoutes'), "serviceName": "notificaciones-falla" })
genericEntitiesServicePath.push({ "route": require('./routes/HistorialEstadoFallaRoutes'), "serviceName": "historial-falla" })
genericEntitiesServicePath.push({ "route": require('./routes/FallaSistemaRoutes'), "serviceName": "fallas-sistema" })
genericEntitiesServicePath.push({ "route": require('./routes/FallaEquipamientoRoutes'), "serviceName": "fallas-equipamiento" })
genericEntitiesServicePath.push({ "route": require('./routes/EstadoFallaRoutes'), "serviceName": "estados-falla" })
genericEntitiesServicePath.push({ "route": require('./routes/ProfileRoutes'), "serviceName": "profiles" })
genericEntitiesServicePath.push({ "route": require('./routes/TipoSistemaRoutes'), "serviceName": "tipos-sistema" })
genericEntitiesServicePath.push({ "route": require('./routes/TipoTagRoutes'), "serviceName": "tipos-tag" })
genericEntitiesServicePath.push({ "route": require('./routes/campoRondaPlantillaRondaRoutes'), "serviceName": "enlace-tarea-plantilla" })
genericEntitiesServicePath.push({ "route": require('./routes/horarioRoutes'), "serviceName": "horario" })
genericEntitiesServicePath.push({ "route": require('./routes/horarioUsuarioRoutes'), "serviceName": "enlace-horario-usuario" })

appOnPremise.use('/auth', createNewConnection, auth);
appOnPremise.use('/reports', createNewConnection, [checkJwt, validatePermissionsReports, authorizationDecision], reports);

for (let service of genericEntitiesServicePath) {
  appOnPremise.use('/' + ENTITIES_BASE_URL + '/' + service.serviceName, createNewConnection, [checkPublicService, checkJwt, validatePermissionsEntity, validatePermissionsUser, authorizationDecision], service.route, [test]);
}

for (let service of genericEntitiesServicePath) {
  appOnPremise.use('/' + ENTITIES_BASE_URL + '/' + service.serviceName, createNewConnection, [checkPublicService], service.route, [test]);
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

let cloudFunction = null
try {
  cloudFunction = functions.https.onRequest(appOnPremise)
} catch (e) { }
export = { cloudFunction, appOnPremise }