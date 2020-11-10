"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const HorarioPersona_1 = require("../entity/HorarioPersona");
const HorarioUsuarioService_1 = require("../services/HorarioUsuarioService");
/******************************************** */
const service = new HorarioUsuarioService_1.HorarioUsuarioService();
const currentClass = HorarioPersona_1.HorarioPersona;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=horarioUsuarioRoutes.js.map