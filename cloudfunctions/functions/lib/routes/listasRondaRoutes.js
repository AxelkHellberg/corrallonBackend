"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const genericRoutes_1 = require("./genericRoutes");
const ListaRonda_1 = require("../entity/ListaRonda");
const ListaRondaService_1 = require("../services/ListaRondaService");
/******************************************** */
const service = new ListaRondaService_1.ListaRondaService();
const currentClass = ListaRonda_1.ListaRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
module.exports = router;
//# sourceMappingURL=listasRondaRoutes.js.map