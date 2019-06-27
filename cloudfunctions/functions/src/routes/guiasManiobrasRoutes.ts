var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { GuiaManiobra } from "../entity/GuiaManiobra";
import { GuiaManiobraService } from "../services/GuiaManiobraService";

/******************************************** */
const service = new GuiaManiobraService()
const currentClass = GuiaManiobra
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
