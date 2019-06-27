"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
const PlantillaGuiaManiobra_1 = require("../services/PlantillaGuiaManiobra");
const PlantillaGuiaManiobra_2 = require("../entity/PlantillaGuiaManiobra");
/******************************************** */
const service = new PlantillaGuiaManiobra_1.PlantillaGuiaManiobraService();
const currentClass = PlantillaGuiaManiobra_2.PlantillaGuiaManiobra;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=plantillaGuiaManiobraRoutes.js.map