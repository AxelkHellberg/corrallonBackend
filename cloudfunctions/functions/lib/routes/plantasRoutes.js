"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const PlantaService_1 = require("../services/PlantaService");
const Planta_1 = require("../entity/Planta");
/******************************************** */
const service = new PlantaService_1.PlantaService();
const currentClass = Planta_1.Planta;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=plantasRoutes.js.map