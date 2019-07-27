"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const FallaEquipamientoService_1 = require("../services/FallaEquipamientoService");
const FallaEquipamiento_1 = require("../entity/FallaEquipamiento");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new FallaEquipamientoService_1.FallaEquipamientoService();
const currentClass = FallaEquipamiento_1.FallaEquipamiento;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=FallaEquipamientoRoutes.js.map