"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
const ValorCampoRondaService_1 = require("../services/ValorCampoRondaService");
const ValorCampoRonda_1 = require("../entity/ValorCampoRonda");
/******************************************** */
const service = new ValorCampoRondaService_1.ValorCampoRondaService();
const currentClass = ValorCampoRonda_1.ValorCampoRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=valoresCamposRondaRoutes.js.map