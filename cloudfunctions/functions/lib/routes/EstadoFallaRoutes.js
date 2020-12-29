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
const EstadoFallaService_1 = require("../services/EstadoFallaService");
const EstadoFalla_1 = require("../entity/EstadoFalla");
const typeorm_1 = require("typeorm");
const apiHandler_1 = require("../components/apiHandler");
var express = require('express');
var router = express.Router();
var later = require("later");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************************************** */
const service = new EstadoFallaService_1.EstadoFallaService();
const currentClass = EstadoFalla_1.EstadoFalla;
/******************************************** */
router.get('/fallasGuiaManiobra', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcm.guiaManiobraId ,vcm.campoManiobraId , vcm.valor, vcm.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , gm.nombre as nombreGuiaManiobra, gm.plantillaGuiaManiobraId FROM " + "koa_test" + ".notificacion_falla nf INNER JOIN " + "koa_test" + ".valor_campo_maniobra vcm ON nf.id = vcm.notificacionFallaId INNER JOIN " + "koa_test" + ".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN " + "koa_test" + ".guia_maniobra gm ON gm.id = vcm.guiaManiobraId   ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.get('/fallasRondas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {

        let r = yield typeorm_1.getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcr.campoRondaId ,vcr.rondaId , vcr.valor , vcr.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , cr.nombre as nombreRonda, cr.equipamientoId FROM " + "koa_test" + ".notificacion_falla nf INNER JOIN " + "koa_test" + ".valor_campo_ronda vcr ON nf.id = vcr.notificacionFallaId INNER JOIN " + "koa_test" + ".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN " + "koa_test" + ".campo_ronda cr ON cr.id = vcr.campoRondaId  ");

        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=EstadoFallaRoutes.js.map