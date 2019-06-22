var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { PlantaService } from "../services/PlantaService";
import { Planta } from "../entity/Planta";

/******************************************** */
const service = new PlantaService()
const currentClass = Planta
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
