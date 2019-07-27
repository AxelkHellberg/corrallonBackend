"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const TipoFallaService_1 = require("../services/TipoFallaService");
const TipoFalla_1 = require("../entity/TipoFalla");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new TipoFallaService_1.TipoFallaService();
const currentClass = TipoFalla_1.TipoFalla;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=TipoFallaRoutes.js.map