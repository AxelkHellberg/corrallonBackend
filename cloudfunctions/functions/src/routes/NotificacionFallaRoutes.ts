import { addToGenericRoute } from './genericRoutes';
import { NotificacionFallaService } from '../services/NotificacionFallaService';
import { NotificacionFalla } from '../entity/NotificacionFalla';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new NotificacionFallaService()
const currentClass = NotificacionFalla
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;