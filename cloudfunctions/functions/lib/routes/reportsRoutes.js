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
const ReportService_1 = require("../services/ReportService");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Msg_1 = require("../msg/Msg");
const Report_1 = require("../entity/Report");
const apiHandler_1 = require("../components/apiHandler");
const typeorm_1 = require("typeorm");
const PlantillaRonda_1 = require("../entity/PlantillaRonda");
const CampoRonda_1 = require("../entity/CampoRonda");
const TimeCalculator_1 = require("../helpers/TimeCalculator");
const PlantillaRondaDates_1 = require("../helpers/PlantillaRondaDates");
const FallaSistema_1 = require("../entity/FallaSistema");
const FallaEquipamiento_1 = require("../entity/FallaEquipamiento");
const EstadoFalla_1 = require("../entity/EstadoFalla");
const Ronda_1 = require("../entity/Ronda");
var later = require("later");
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************CONFIG CLASS************************** */
const service = new ReportService_1.ReportService();
const currentClass = Report_1.Report;
/******************************************** */
router.post('/execute', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.id);
    try {
        if (!("id" in req.body)) {
            console.log("No ID");
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.ID_MANDATORY, Msg_1.Msg.ID_MANDATORY, 501);
        }
        let reportes = yield service.findById(req.body.id);
        console.log(reportes);
        let report = yield service.findById(req.body.id);
        console.log("report.from");
        console.log(report.from + "hola");
        console.log("id");
        if (!("filters" in req.body))
            req.body.filters = {};
        console.log("REPORTTTTT1::");
        console.log(report);
        req.body.filters["myUserId"] = res.locals.jwtPayload.u;
        let responseData = yield service.execute(report, req.body.filters);
        res.locals.responseData = responseData;
        res.send(responseData);
    }
    catch (e) {
        console.log("catch Error");
        yield apiHandler_1.responseError(res, e);
    }
    next();
}));
router.post('/execute/reporte-ronda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r;
        if (req.body.id === 0) {
            r = yield typeorm_1.getConnection().getRepository(Ronda_1.Ronda).createQueryBuilder("ronda")
                .select("ronda").getMany();
        }
        else {
            r = yield typeorm_1.getConnection().getRepository(Ronda_1.Ronda).createQueryBuilder("ronda")
                .select("ronda").where('ronda.userId=' + req.body.id).getMany();
        }
        console.log("res");
        console.log(r);
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/estado-falla', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(EstadoFalla_1.EstadoFalla).createQueryBuilder("estado_falla")
            .select("estado_falla").getMany();
        console.log("res");
        console.log(r);
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/notificaiones-fallas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(FallaSistema_1.FallaSistema).createQueryBuilder("notificacion-falla")
            .select("notificacion-falla").getMany();
        console.log("res");
        console.log(r);
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/falla-sistema', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(FallaSistema_1.FallaSistema).createQueryBuilder("falla_sistema")
            .select("falla_sistema").getMany();
        console.log("res");
        console.log(r);
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/falla-equipo', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(FallaEquipamiento_1.FallaEquipamiento).createQueryBuilder("falla_equipamiento")
            .select("falla_equipamiento").getMany();
        console.log("res");
        console.log(r);
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/plantillas-con-camposronda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!("filters" in req.body)) {
        try {
            let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
                .leftJoinAndSelect("equipamiento.sistema", "sistema")
                .leftJoinAndSelect("sistema.planta", "planta")
                .where('plantillaRonda.id=' + req.body.filters["id"])
                .getMany();
            next();
            res.status(200).send(r);
        }
        catch (e) {
            yield apiHandler_1.responseError(res, e);
        }
    }
    else {
        try {
            let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
                .leftJoinAndSelect("equipamiento.sistema", "sistema")
                .leftJoinAndSelect("sistema.planta", "planta")
                .getMany();
            next();
            res.status(200).send(r);
        }
        catch (e) {
            yield apiHandler_1.responseError(res, e);
        }
    }
}));
router.post('/execute/campos-ronda', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(CampoRonda_1.CampoRonda).createQueryBuilder("campoRonda")
            .leftJoinAndSelect("campoRonda.equipamiento", "equipamiento")
            .leftJoinAndSelect("equipamiento.sistema", "sistema")
            .leftJoinAndSelect("sistema.planta", "planta")
            .getMany();
        next();
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/plantillas-habilitadas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
            .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
            .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
            .leftJoinAndSelect("horarioUsuario.user", "user")
            .where('user.id=' + req.body.filters["idUsuario"])
            .getMany();
        let validPlantillaRonda = new Array();
        for (let p of r) {
            for (let h of p.horariosRecurrentes) {
                if (TimeCalculator_1.TimeCalculator.availableNow(h)) { // TODO: Fijarse en el servicio que no se creen mal los dias
                    validPlantillaRonda.push(p);
                    break;
                }
            }
        }
        next();
        res.send(validPlantillaRonda);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/plantillas-proximas-fechas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
            .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
            .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
            .leftJoinAndSelect("horarioUsuario.user", "user")
            .where('user.id=' + req.body.filters["idUsuario"])
            .getMany();
        let nextDates = new Array();
        for (let p of r) {
            for (let h of p.horariosRecurrentes) {
                nextDates.push(new PlantillaRondaDates_1.PlantillaRondaDates(h.plantillaId, TimeCalculator_1.TimeCalculator.nextOcurrences(h)));
            }
        }
        next();
        res.send(nextDates);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
router.post('/execute/plantillas-horarios', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!("filters" in req.body)) {
        try {
            let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
                .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
                .leftJoinAndSelect("horarioUsuario.user", "user")
                .getMany();
            next();
            res.send(r);
        }
        catch (e) {
            yield apiHandler_1.responseError(res, e);
        }
    }
    else {
        try {
            let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.horariosRecurrentes", "horario")
                .leftJoinAndSelect("horario.horarioPersona", "horarioUsuario")
                .leftJoinAndSelect("horarioUsuario.user", "user")
                .where('user.id=' + req.body.filters["idUsuario"])
                .getMany();
            next();
            res.send(r);
        }
        catch (e) {
            yield apiHandler_1.responseError(res, e);
        }
    }
}));
module.exports = router;
//# sourceMappingURL=reportsRoutes.js.map