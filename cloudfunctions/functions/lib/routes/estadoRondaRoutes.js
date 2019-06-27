"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const EstadoRondaService_1 = require("../services/EstadoRondaService");
const EstadoRonda_1 = require("../entity/EstadoRonda");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new EstadoRondaService_1.EstadoRondaService();
const currentClass = EstadoRonda_1.EstadoRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=estadoRondaRoutes.js.map