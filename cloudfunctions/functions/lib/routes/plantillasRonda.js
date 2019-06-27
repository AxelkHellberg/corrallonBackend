"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const PlnatillaRondaService_1 = require("../services/PlnatillaRondaService");
const PlantillaRonda_1 = require("../entity/PlantillaRonda");
/******************************************** */
const service = new PlnatillaRondaService_1.PlantillaRondaService();
const currentClass = PlantillaRonda_1.PlantillaRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=plantillasRonda.js.map