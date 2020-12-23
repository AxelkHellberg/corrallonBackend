"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
/******************************************************************************* */
const PlnatillaRondaService_1 = require("../services/PlnatillaRondaService");
const apiHandler_1 = require("../components/apiHandler");
const typeorm_1 = require("typeorm");
const PlantillaRonda_1 = require("../entity/PlantillaRonda");
var later = require("later");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************************************** */
const service = new PlnatillaRondaService_1.PlantillaRondaService();
const currentClass = PlantillaRonda_1.PlantillaRonda;
/******************************************** */
router.post('/crearHorario', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("INSERT INTO koa_develop.horario (createdAt,updateAt,tipoRecurrencia,fechaInicio,fechaFin,plantillaId,horaInicio,horaFin,dias) VALUES(" + req.fechaInicio + "," + req.fechaFin + "," + req.tipoRecurrencia + "," + req.fechaInicio + "," + req.fechaFin + "," + req.plantillaId + "," + req.horaInicio + "," + req.horaFin + "," + req.dias + ") INSERT INTO koa_develop.horario_persona (createdAt,updateAt,userId,horarioId) VALUES(" + req.createdAt + "," + req.updateAt + "," + req.userId + ",select last_insert_id())");
        console.log("res");
        console.log(r);
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=plantillasRonda.js.map