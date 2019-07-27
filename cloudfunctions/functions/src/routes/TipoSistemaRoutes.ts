import { addToGenericRoute } from './genericRoutes';
import { TipoSistemaService } from '../services/TipoSistemaService';
import { TipoSistema } from '../entity/TipoSistema';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TipoSistemaService()
const currentClass = TipoSistema
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;