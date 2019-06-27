var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { SistemaService } from "../services/SistemaService";
import { Sistema } from "../entity/Sistema";
import { RondaService } from "../services/RondaService";
import { Ronda } from "../entity/Ronda";
/******************************************** */
const service = new RondaService()
const currentClass = Ronda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
