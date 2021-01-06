"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//////////////////////////////////////////////////////camposRondasRoutes
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
const CampoRondaService_1 = require("../services/CampoRondaService");
const CampoRonda_1 = require("../entity/CampoRonda");
/******************************************** */
const service = new CampoRondaService_1.CampoRondaService();
const currentClass = CampoRonda_1.CampoRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=camposRondaRoutes.js.map