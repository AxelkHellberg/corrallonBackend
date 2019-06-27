"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const UnidadMedidaService_1 = require("../services/UnidadMedidaService");
const UnidadMedida_1 = require("../entity/UnidadMedida");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new UnidadMedidaService_1.UnidadMedidaService();
const currentClass = UnidadMedida_1.UnidadMedida;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=unidadMedidaRoutes.js.map