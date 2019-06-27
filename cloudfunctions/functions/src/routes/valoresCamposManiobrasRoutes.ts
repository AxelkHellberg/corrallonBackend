var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { ValorCampoManiobra } from "../entity/ValorCampoManiobra";
import { ValorCampoManiobraService } from "../services/ValorCampoManiobraService";

/******************************************** */
const service = new ValorCampoManiobraService()
const currentClass = ValorCampoManiobra
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
