"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const NotificacionFallaService_1 = require("../services/NotificacionFallaService");
const NotificacionFalla_1 = require("../entity/NotificacionFalla");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new NotificacionFallaService_1.NotificacionFallaService();
const currentClass = NotificacionFalla_1.NotificacionFalla;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=NotificacionFallaRoutes.js.map