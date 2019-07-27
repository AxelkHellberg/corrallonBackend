import { addToGenericRoute } from './genericRoutes';
import { TipoFallaService } from '../services/TipoFallaService';
import { TipoFalla } from '../entity/TipoFalla';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TipoFallaService()
const currentClass = TipoFalla
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;