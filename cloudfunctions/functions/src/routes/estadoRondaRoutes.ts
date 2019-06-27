import { addToGenericRoute } from "./genericRoutes";
import { TagService } from "../services/TagService";
import { Tag } from "../entity/Tag";
import { EquipamientoService } from "../services/EquipamientoService";
import { Equipamiento } from "../entity/Equipamiento";
import { EstadoRondaService } from "../services/EstadoRondaService";
import { EstadoRonda } from "../entity/EstadoRonda";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new EstadoRondaService()
const currentClass = EstadoRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
