"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const TipoSistemaService_1 = require("../services/TipoSistemaService");
const TipoSistema_1 = require("../entity/TipoSistema");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new TipoSistemaService_1.TipoSistemaService();
const currentClass = TipoSistema_1.TipoSistema;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=TipoSistemaRoutes.js.map