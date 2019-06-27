var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { GuiaManiobra } from "../entity/GuiaManiobra";
import { GuiaManiobraService } from "../services/GuiaManiobraService";
import { HorarioService } from "../services/HorarioService";
import { Horario } from "../entity/Horario";
import { ListaRonda } from "../entity/ListaRonda";
import { ListaRondaService } from "../services/ListaRondaService";

/******************************************** */
const service = new ListaRondaService()
const currentClass = ListaRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
