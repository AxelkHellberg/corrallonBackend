"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const ValorCampoManiobra_1 = require("../entity/ValorCampoManiobra");
const ValorCampoManiobraService_1 = require("../services/ValorCampoManiobraService");
/******************************************** */
const service = new ValorCampoManiobraService_1.ValorCampoManiobraService();
const currentClass = ValorCampoManiobra_1.ValorCampoManiobra;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=valoresCamposManiobrasRoutes.js.map