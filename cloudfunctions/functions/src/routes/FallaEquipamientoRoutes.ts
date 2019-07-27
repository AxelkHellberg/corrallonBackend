import { addToGenericRoute } from './genericRoutes';
import { FallaEquipamientoService } from '../services/FallaEquipamientoService';
import { FallaEquipamiento } from '../entity/FallaEquipamiento';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new FallaEquipamientoService()
const currentClass = FallaEquipamiento
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;