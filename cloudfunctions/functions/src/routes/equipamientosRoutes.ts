import { addToGenericRoute } from "./genericRoutes";
import { TagService } from "../services/TagService";
import { Tag } from "../entity/Tag";
import { EquipamientoService } from "../services/EquipamientoService";
import { Equipamiento } from "../entity/Equipamiento";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new EquipamientoService()
const currentClass = Equipamiento
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
