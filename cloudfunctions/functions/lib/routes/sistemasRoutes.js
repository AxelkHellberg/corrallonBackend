"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const SistemaService_1 = require("../services/SistemaService");
const Sistema_1 = require("../entity/Sistema");
/******************************************** */
const service = new SistemaService_1.SistemaService();
const currentClass = Sistema_1.Sistema;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=sistemasRoutes.js.map