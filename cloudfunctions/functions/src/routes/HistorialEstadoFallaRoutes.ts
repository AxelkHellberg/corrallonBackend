import { addToGenericRoute } from './genericRoutes';
import { HistorialEstadoFallaService } from '../services/HistorialEstadoFallaService';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new HistorialEstadoFallaService()
const currentClass = HistorialEstadoFalla
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;