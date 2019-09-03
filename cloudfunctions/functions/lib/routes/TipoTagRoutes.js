"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericRoutes_1 = require("./genericRoutes");
const TipoTagService_1 = require("../services/TipoTagService");
const TipoTag_1 = require("../entity/TipoTag");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new TipoTagService_1.TipoTagService();
const currentClass = TipoTag_1.TipoTag;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=TipoTagRoutes.js.map