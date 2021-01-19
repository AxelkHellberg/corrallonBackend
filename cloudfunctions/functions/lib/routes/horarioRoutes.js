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
const genericRoutes_1 = require("./genericRoutes");
/******************************************************************************* */
const Horario_1 = require("../entity/Horario");
const HorarioService_1 = require("../services/HorarioService");
const typeorm_1 = require("typeorm");
const global_1 = require("../global");
const apiHandler_1 = require("../components/apiHandler");
/******************************************** */
const service = new HorarioService_1.HorarioService();
const currentClass = Horario_1.Horario;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
router.post('/traerRondasDesbloqueadas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT r.id rondaId,h.horaInicio ,h.horaFin ,u.username, pr.nombre,h.fechaInicio as fecha,pr.id as plantillaId FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".horario h INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".horario_persona hp ON h.id = hp.horarioId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".`user` u ON u.id = hp.userId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda pr ON h.plantillaId = pr.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".ronda r ON r.plantillaRondaId = pr.id  WHERE h.fechaInicio = CURDATE() and u.username ='" + req.body.username + "' and h.horaInicio <= DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR) and h.horaFin >= DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR) ");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerRondasBloqueadas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT h.horaInicio ,h.horaFin ,u.username, pr.nombre,h.fechaInicio as fecha FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".horario h INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".horario_persona hp ON h.id = hp.horarioId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".`user` u ON u.id = hp.userId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda pr ON h.plantillaId = pr.id WHERE h.fechaInicio = CURDATE() and u.username ='" + req.body.username + "' and (h.horaInicio > DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR) or h.horaFin < DATE_SUB(CURRENT_TIME() , INTERVAL 3 HOUR)) ");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=horarioRoutes.js.map