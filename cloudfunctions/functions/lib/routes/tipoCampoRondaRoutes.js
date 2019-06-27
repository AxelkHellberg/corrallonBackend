"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const TipoCampoRondaService_1 = require("../services/TipoCampoRondaService");
const TipoCampoRonda_1 = require("../entity/TipoCampoRonda");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new TipoCampoRondaService_1.TipoCampoRondaService();
const currentClass = TipoCampoRonda_1.TipoCampoRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=tipoCampoRondaRoutes.js.map