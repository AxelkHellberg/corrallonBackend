import { addToGenericRoute } from './genericRoutes';
import { FallaSistemaService } from '../services/FallaSistemaService';
import { FallaSistema } from '../entity/FallaSistema';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new FallaSistemaService()
const currentClass = FallaSistema
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;