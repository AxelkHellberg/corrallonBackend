"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const EquipamientoService_1 = require("../services/EquipamientoService");
const Equipamiento_1 = require("../entity/Equipamiento");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new EquipamientoService_1.EquipamientoService();
const currentClass = Equipamiento_1.Equipamiento;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=equipamientosRoutes.js.map