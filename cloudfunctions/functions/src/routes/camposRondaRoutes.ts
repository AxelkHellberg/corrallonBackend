//////////////////////////////////////////////////////camposRondasRoutes
var express = require('express');
var router = express.Router();
import { addToGenericRoute } from "./genericRoutes";
/******************************************************************************* */
import { CampoManiobra } from "../entity/CampoManiobra";
import { CampoManiobraService } from "../services/CamposManiobraService";
import { CampoRondaService } from "../services/CampoRondaService";
import { CampoRonda } from "../entity/CampoRonda";
import { getConnection } from "typeorm";
import { GlobalVariable } from "../global";
import { responseError } from "../components/apiHandler";

/******************************************** */
const service = new CampoRondaService()
const currentClass = CampoRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)


module.exports = router;