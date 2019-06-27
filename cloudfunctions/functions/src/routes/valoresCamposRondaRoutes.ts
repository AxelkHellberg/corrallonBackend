var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { ValorCampoManiobra } from "../entity/ValorCampoManiobra";
import { ValorCampoManiobraService } from "../services/ValorCampoManiobraService";
import { ValorCampoRondaService } from "../services/ValorCampoRondaService";
import { ValorCampoRonda } from "../entity/ValorCampoRonda";

/******************************************** */
const service = new ValorCampoRondaService()
const currentClass = ValorCampoRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
