var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { CampoRondaPlantillaRonda } from "../entity/CampoRondaPlantillaRonda";
import { CampoRondaPlantillaRondaService } from "../services/CampoRondaPlantillaRondaService";

/******************************************** */
const service = new CampoRondaPlantillaRondaService()
const currentClass = CampoRondaPlantillaRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
