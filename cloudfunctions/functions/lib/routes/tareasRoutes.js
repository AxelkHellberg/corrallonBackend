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
//////////////////////////////////////////////////////camposRondasRoutes
var express = require('express');
var router = express.Router();
const CampoRondaService_1 = require("../services/CampoRondaService");
const CampoRonda_1 = require("../entity/CampoRonda");
const typeorm_1 = require("typeorm");
const global_1 = require("../global");
const apiHandler_1 = require("../components/apiHandler");
/******************************************** */
const service = new CampoRondaService_1.CampoRondaService();
const currentClass = CampoRonda_1.CampoRonda;
/******************************************** */
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
module.exports = router;
//# sourceMappingURL=tareasRoutes.js.map