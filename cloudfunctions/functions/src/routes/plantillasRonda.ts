var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { PlantillaRondaService } from "../services/PlnatillaRondaService";
import { PlantillaRonda } from "../entity/PlantillaRonda";

/******************************************** */
const service = new PlantillaRondaService()
const currentClass = PlantillaRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
