var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { GuiaManiobra } from "../entity/GuiaManiobra";
import { GuiaManiobraService } from "../services/GuiaManiobraService";
import { PlantillaGuiaManiobraService } from "../services/PlantillaGuiaManiobra";
import { PlantillaGuiaManiobra } from "../entity/PlantillaGuiaManiobra";

/******************************************** */
const service = new PlantillaGuiaManiobraService()
const currentClass = PlantillaGuiaManiobra
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
