var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { HorarioPersona } from "../entity/HorarioPersona";
import { HorarioUsuarioService } from "../services/HorarioUsuarioService";

/******************************************** */
const service = new HorarioUsuarioService()
const currentClass = HorarioPersona
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
