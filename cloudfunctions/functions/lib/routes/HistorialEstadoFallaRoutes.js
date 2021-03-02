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
        let cont = 0;
        let r;
        let connection = typeorm_1.getConnection();
        console.log("connecion:");
        console.log(connection);
        req.body.idTareaData.forEach(element => {
            r = connection.query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda SET tareaObligatoria = 1 WHERE campoRondaId=" + req.body.idTareaData[cont] + " and plantillaRondaId=" + req.body.idPlantilla);
            console.log(req.body.idTareaData[cont]);
            cont += 1;
        });
        console.log(r);
        console.log("STATUS CODE:");
        console.log(res.statusCode);
        res.status(200).send();
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerTareasCompleto', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT p.nombre plantaNombre,p.id plantaId, s.nombre sistemaNombre,s.id sistemaId, e.nombre nombreEquipo,e.id equipoId, cr.nombre nombreTarea,cr.id tareaId,cr.tipoCampoRondaId tipoTareaId,tcr.nombre tipoTareaNombre,cr.unidadMedidaId unidadDeMedidaId,cr.descripcion descripcionTarea,cr.tipoCampoRondaId tipoTareaId,crpr.plantillaRondaId, t.nombre nombreTag, t.id tagId, cr.valorNormal,cr.valorMin ,cr.valorMax,ta.completada,ta.especificacion,crpr.tareaObligatoria, r.id rondaId,r.detalle FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".planta p INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".sistema s ON p.id = s.plantaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".equipamiento e ON e.sistemaId = s.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda cr ON e.id = cr.equipamientoId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda crpr ON cr.id = crpr.campoRondaId INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".tipo_campo_ronda tcr ON tcr.id = cr.tipoCampoRondaId  INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".tag t ON t.id = e.tagId   INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".ronda r ON r.plantillaRondaId = crpr.plantillaRondaId  INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".tarea_asignada ta ON r.id = ta.rondaId and ta.tareaId = cr.id WHERE ta.rondaId = " + req.body.rondaId + " GROUP BY p.nombre,p.id, s.nombre,s.id, e.nombre,e.id , cr.nombre,cr.id,cr.tipoCampoRondaId ,tcr.nombre,cr.unidadMedidaId,  crpr.plantillaRondaId, t.nombre, t.id ,cr.descripcion ,cr.tipoCampoRondaId, cr.valorNormal ,cr.valorMin ,cr.valorMax,ta.completada,ta.especificacion,crpr.tareaObligatoria, r.id,r.detalle");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/cambiarEspecificacion', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda r SET especificacion = '" + req.body.especificacion + "' WHERE r.plantillaRondaId =" + req.body.idPlantillaRonda + "  AND r.campoRondaId =" + req.body.idTarea + " ");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerProductos', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT * FROM Producto");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/cambiarDetalleRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".ronda r SET detalle = '" + req.body.detalle + "' WHERE r.id =" + req.body.rondaId);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/finalizarTarea', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".valor_campo_ronda (valor,valorNormal,rondaId,campoRondaId,especificacion) VALUES(" + req.body.valor + "," + req.body.valorNormal + "," + req.body.rondaId + "," + req.body.tareaId + ",'" + req.body.especificacion + "')");
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".tarea_asignada SET completada = 1 WHERE tareaId = " + req.body.tareaId + " AND rondaId = " + req.body.rondaId + "");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerIdTareas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT crpr.campoRondaId FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda_plantilla_ronda crpr WHERE crpr.plantillaRondaId =" + req.body.plantillaRondaId);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/finalizarRonda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".ronda SET estadoRondaId = 1 WHERE id = " + req.body.rondaId);
        //poner console log y ver que muestra req.body.rondaId hay error que dice que esta undefined
        console.log(req.body.rondaId);
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/asignarTareassss', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cont = 0;
        let r;
        console.log("PRIMER ID DE TAREA ANTES DE FOR");
        console.log(req.body.tareasId[cont].campoRondaId);
        console.log("REQ BODY");
        console.log(req.body);
        console.log("RONDA ID:");
        console.log(req.body.rondaId);
        let connection = typeorm_1.getConnection();
        req.body.tareasId.forEach(element => {
            r = connection.query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".tarea_asignada (rondaId,tareaId,completada,especificacion,horarioId) VALUES(" + req.body.rondaId + "," + element.campoRondaId + ",0,'Sin especificacion'," + req.body.horarioId + ")");
            console.log(req.body.tareasId[cont].campoRondaId);
            cont += 1;
        });
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/crearHorarioUsuario', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".horario_persona (userId,horarioId) VALUES(" + req.body.userId + "," + req.body.horarioId + ")");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/traerInfoTarea', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT cr.id tareaId,cr.descripcion tareaDescripcion,cr.nombre tareaNombre,cr.equipamientoId equipoId,cr.unidadMedidaId,cr.tipoCampoRondaId,cr.valorNormal,cr.valorMax,cr.valorMin,e.nombre nombreEquipo,e.sistemaId,s.nombre nombreSistema,s.id sistemaId,p.nombre nombrePlanta,p.id plantaId,tcr.nombre nombreTipoTarea,um.nombre nombreUnidadMedida FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda cr INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".equipamiento e ON cr.equipamientoId = e.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".sistema s ON e.sistemaId = s.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".planta p ON s.plantaId = p.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".tipo_campo_ronda tcr ON cr.tipoCampoRondaId = tcr.id INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".unidad_medida um ON cr.unidadMedidaId = um.id  WHERE cr.id = " + req.body.tareaId);
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/editarTarea', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("UPDATE " + global_1.GlobalVariable.DATA_BASE_NAME + ".campo_ronda SET descripcion = '" + req.body.descripcion + "',nombre = '" + req.body.nombreTarea + "',valorNormal = '" + req.body.valorNormal + "',valorMax = '" + req.body.valorMax + "',valorMin = '" + req.body.valorMin + "',equipamientoId = " + req.body.equipoId + ", tipoCampoRondaId = " + req.body.tipoCampoRondaId + ",unidadMedidaId = " + req.body.unidadMedidaId + " WHERE id = " + req.body.tareaId + "");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=HistorialEstadoFallaRoutes.js.map