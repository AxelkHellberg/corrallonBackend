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
const HistorialEstadoFallaService_1 = require("../services/HistorialEstadoFallaService");
const HistorialEstadoFalla_1 = require("../entity/HistorialEstadoFalla");
const typeorm_1 = require("typeorm");
const global_1 = require("../global");
const apiHandler_1 = require("../components/apiHandler");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new HistorialEstadoFallaService_1.HistorialEstadoFallaService();
const currentClass = HistorialEstadoFalla_1.HistorialEstadoFalla;
/******************************************** */
router.get('/fallasGuiaManiobra', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcm.guiaManiobraId ,vcm.campoManiobraId , vcm.valor, vcm.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , gm.nombre as nombreGuiaManiobra, gm.plantillaGuiaManiobraId FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".notificacion_falla nf INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".valor_campo_maniobra vcm ON nf.id = vcm.notificacionFallaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".guia_maniobra gm ON gm.id = vcm.guiaManiobraId   ");
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
        let r = yield typeorm_1.getConnection().query("SELECT nf.createdAt,nf.id as idFalla,nf.descripcion,nf.estadoFallaId,nf.tipoFallaId,vcr.campoRondaId ,vcr.rondaId , vcr.valor , vcr.valorNormal , ef.id  as idEstadoFalla, ef.nombre as nombreEstadoFalla, ef.posicion , cr.nombre as nombreRonda, cr.equipamientoId FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".notificacion_falla nf INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".valor_campo_ronda vcr ON nf.id = vcr.notificacionFallaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".estado_falla ef ON ef.id = nf.estadoFallaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda cr ON cr.id = vcr.campoRondaId  ");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.get('/traerTareas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT p.nombre as Planta,s.nombre as Sistema,e.nombre Equipo,cr.nombre NombreTarea,cr.descripcion Descripcion,um.nombre UnidadMedida,cr.id as idTarea FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda cr INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".equipamiento e ON cr.equipamientoId = e.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".sistema s ON e.sistemaId = s.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".planta p ON p.id = s.plantaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".unidad_medida um ON um.id = cr.unidadMedidaId ");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/crearTarea', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda (createdAt,updateAt,descripcion,nombre,valorNormal,valorMin,valorMax,equipamientoId,tipoCampoRondaId,unidadMedidaId,funcionamientoSistema,obligatorioSistema,funcionamientoEquipo,obligatorioEquipo) VALUES (NOW(),NOW(),'" + req.body.descripcion + "','" + req.body.nombre + "','" + req.body.valorNormal + "','" + req.body.valorMin + "','" + req.body.valorMax + "'," + req.body.equipamientoId + "," + req.body.tipoCampoRondaId + "," + req.body.unidadMedidaId + ",1,0,1,0)");
        console.log("DESC");
        console.log(req.body.descripcion);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/cambiarObligatorio', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda SET tareaObligatoria = 1 WHERE campoRondaId=" + req.body.idTarea + " and plantillaRondaId=" + req.body.idPlantilla);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=HistorialEstadoFallaRoutes.js.map