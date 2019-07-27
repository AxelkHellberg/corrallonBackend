import { addToGenericRoute } from './genericRoutes';
import { EstadoFallaService } from '../services/EstadoFallaService';
import { EstadoFalla } from '../entity/EstadoFalla';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new EstadoFallaService()
const currentClass = EstadoFalla
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;