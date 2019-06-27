import { addToGenericRoute } from "./genericRoutes";
import { TagService } from "../services/TagService";
import { Tag } from "../entity/Tag";
import { UnidadMedidaService } from "../services/UnidadMedidaService";
import { UnidadMedida } from "../entity/UnidadMedida";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new UnidadMedidaService()
const currentClass = UnidadMedida
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
