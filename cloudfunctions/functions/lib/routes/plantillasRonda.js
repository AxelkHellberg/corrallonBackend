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
const PlnatillaRondaService_1 = require("../services/PlnatillaRondaService");
const apiHandler_1 = require("../components/apiHandler");
const typeorm_1 = require("typeorm");
const PlantillaRonda_1 = require("../entity/PlantillaRonda");
const global_1 = require("../global");
var later = require("later");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************************************** */
const service = new PlnatillaRondaService_1.PlantillaRondaService();
const currentClass = PlantillaRonda_1.PlantillaRonda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
router.post('/crearPlantillaRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda (nombre,funcionamientoSistema,obligatorioSistema,funcionamientoEquipo,obligatorioEquipo,descripcion)VALUES('" + req.body.nombre + "',1,0,1,0,'" + req.body.descripcion + "')");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/eliminarPlantillaRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("DELETE FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda WHERE id=" + req.body.plantillaRondaId);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/editarPlantillaRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda SET nombre='" + req.body.nombre + "', descripcion='" + req.body.descripcion + "' WHERE id=" + req.body.plantillaRondaId);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/asociarTareasEnRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r;
        console.log(req.body);
        let cont = 0;
        let connection = typeorm_1.getConnection();
        req.body.idTareaData.forEach(element => {
            r = connection.query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda (campoRondaId,plantillaRondaId) VALUES(" + req.body.idTareaData[cont] + "," + req.body.idInsertado + ")");
            console.log(req.body.idTareaData[cont]);
            cont += 1;
        });
        console.log("STATUS CODE:");
        console.log(res.statusCode);
        res.status(200).send();
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/eliminarTareasDePlantllaRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r;
        console.log(req.body);
        let cont = 0;
        let connection = typeorm_1.getConnection();
        r = connection.query("DELETE FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda WHERE plantillaRondaId=" + req.body.idInsertado);
        cont += 1;
        res.status(200).send();
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/CrearRondaNuevo', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".ronda (userId,estadoRondaId,plantillaRondaId) VALUES(" + req.body.userId + ",2," + req.body.plantillaRondaId + ")");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerPlantillasRondas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT pr.id,pr.nombre ,pr.funcionamientoEquipo,pr.funcionamientoSistema ,pr.obligatorioEquipo ,pr.obligatorioSistema ,pr.createdAt ,pr.updateAt ,pr.horarios FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda pr  ");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerPlantillaRondaCompleta', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT pr.id plantillaId, pr.nombre nombrePlantilla, pr.descripcion descripcionPlantilla, crpr.campoRondaId tareaId, crpr.tareaObligatoria,cr.nombre nombreTarea, cr.descripcion descripcionTarea, cr.valorMax, cr.valorMin, cr.valorNormal,cr.equipamientoId equipoId,e.nombre nombreEquipo,e.sistemaId,s.nombre nombreSistema,s.plantaId,p.nombre nombrePlanta, um.id unidadMedidaId, um.nombre nombreUnidadMedida FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda pr INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda crpr ON pr.id = crpr.plantillaRondaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda cr ON cr.id = crpr.campoRondaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".equipamiento e ON e.id = cr.equipamientoId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".sistema s ON s.id = e.sistemaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".planta p ON p.id = s.plantaId INNER JOIN koa_develop.unidad_medida um ON um.id = cr.unidadMedidaId WHERE pr.id = " + req.body.plantillaId);
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=plantillasRonda.js.map