"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const EstadoFallaService_1 = require("../services/EstadoFallaService");
const EstadoFalla_1 = require("../entity/EstadoFalla");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new EstadoFallaService_1.EstadoFallaService();
const currentClass = EstadoFalla_1.EstadoFalla;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=EstadoFallaRoutes.js.map