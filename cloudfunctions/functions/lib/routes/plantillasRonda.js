"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
/******************************************************************************* */
const PlnatillaRondaService_1 = require("../services/PlnatillaRondaService");
const PlantillaRonda_1 = require("../entity/PlantillaRonda");
var later = require("later");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************************************** */
const service = new PlnatillaRondaService_1.PlantillaRondaService();
const currentClass = PlantillaRonda_1.PlantillaRonda;
/******************************************** */
module.exports = router;
//# sourceMappingURL=plantillasRonda.js.map