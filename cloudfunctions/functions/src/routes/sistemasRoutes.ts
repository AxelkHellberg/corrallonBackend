var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { SistemaService } from "../services/SistemaService";
import { Sistema } from "../entity/Sistema";
/******************************************** */
const service = new SistemaService()
const currentClass = Sistema
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
