import { addToGenericRoute } from "./genericRoutes";
import { TagService } from "../services/TagService";
import { Tag } from "../entity/Tag";
import { TipoCampoRondaService } from "../services/TipoCampoRondaService";
import { TipoCampoRonda } from "../entity/TipoCampoRonda";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TipoCampoRondaService()
const currentClass = TipoCampoRonda
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
