"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const FallaSistemaService_1 = require("../services/FallaSistemaService");
const FallaSistema_1 = require("../entity/FallaSistema");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new FallaSistemaService_1.FallaSistemaService();
const currentClass = FallaSistema_1.FallaSistema;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=FallaSistemaRoutes.js.map