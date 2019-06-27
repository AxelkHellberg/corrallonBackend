"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
const HorarioService_1 = require("../services/HorarioService");
const Horario_1 = require("../entity/Horario");
/******************************************** */
const service = new HorarioService_1.HorarioService();
const currentClass = Horario_1.Horario;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=horarioRoutes.js.map