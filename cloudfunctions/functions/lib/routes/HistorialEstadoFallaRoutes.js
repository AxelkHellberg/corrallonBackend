"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const HistorialEstadoFallaService_1 = require("../services/HistorialEstadoFallaService");
const HistorialEstadoFalla_1 = require("../entity/HistorialEstadoFalla");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new HistorialEstadoFallaService_1.HistorialEstadoFallaService();
const currentClass = HistorialEstadoFalla_1.HistorialEstadoFalla;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=HistorialEstadoFallaRoutes.js.map