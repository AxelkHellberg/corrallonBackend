var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { CampoManiobra } from "../entity/CampoManiobra";
import { CampoManiobraService } from "../services/CamposManiobraService";

/******************************************** */
const service = new CampoManiobraService()
const currentClass = CampoManiobra
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
