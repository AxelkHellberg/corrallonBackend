"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const CampoManiobra_1 = require("../entity/CampoManiobra");
const CamposManiobraService_1 = require("../services/CamposManiobraService");
/******************************************** */
const service = new CamposManiobraService_1.CampoManiobraService();
const currentClass = CampoManiobra_1.CampoManiobra;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=camposManiobraRoutes.js.map