var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { Horario } from "../entity/Horario";
import { HorarioService } from "../services/HorarioService";

/******************************************** */
const service = new HorarioService()
const currentClass = Horario
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
