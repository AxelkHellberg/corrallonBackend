var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { GuiaManiobra } from "../entity/GuiaManiobra";
import { GuiaManiobraService } from "../services/GuiaManiobraService";
import { HorarioService } from "../services/HorarioService";
import { Horario } from "../entity/Horario";

/******************************************** */
const service = new HorarioService()
const currentClass = Horario
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
