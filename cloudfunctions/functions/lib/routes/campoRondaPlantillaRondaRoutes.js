"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const CampoRondaPlantillaRonda_1 = require("../entity/CampoRondaPlantillaRonda");
const CampoRondaPlantillaRondaService_1 = require("../services/CampoRondaPlantillaRondaService");
/******************************************** */
const service = new CampoRondaPlantillaRondaService_1.CampoRondaPlantillaRondaService();
const currentClass = CampoRondaPlantillaRonda_1.CampoRondaPlantillaRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=campoRondaPlantillaRondaRoutes.js.map