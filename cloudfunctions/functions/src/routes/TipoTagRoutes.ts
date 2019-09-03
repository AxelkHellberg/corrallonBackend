import { addToGenericRoute } from './genericRoutes';
import { TipoTagService } from '../services/TipoTagService';
import { TipoTag } from '../entity/TipoTag';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TipoTagService()
const currentClass = TipoTag
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;