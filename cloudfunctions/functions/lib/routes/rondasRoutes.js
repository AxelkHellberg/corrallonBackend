"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
const RondaService_1 = require("../services/RondaService");
const Ronda_1 = require("../entity/Ronda");
/******************************************** */
const service = new RondaService_1.RondaService();
const currentClass = Ronda_1.Ronda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=rondasRoutes.js.map