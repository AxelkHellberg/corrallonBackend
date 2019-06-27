"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const GuiaManiobra_1 = require("../entity/GuiaManiobra");
const GuiaManiobraService_1 = require("../services/GuiaManiobraService");
/******************************************** */
const service = new GuiaManiobraService_1.GuiaManiobraService();
const currentClass = GuiaManiobra_1.GuiaManiobra;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=guiasManiobrasRoutes.js.map