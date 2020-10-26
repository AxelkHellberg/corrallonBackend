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
var express = require('express');
var router = express.Router();
const jwt = require("../components/jwt");
/******************CONFIG CLASS************************** */
const service = new ReportService_1.ReportService();
const currentClass = Report_1.Report;
/******************************************** */
router.post('/execute', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!("id" in req.body))
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.ID_MANDATORY, Msg_1.Msg.ID_MANDATORY, 500);
        let reportes = yield service.findById(5);
        console.log(reportes);
        let report = yield service.findById(req.body.id);
        if (!("filters" in req.body))
            req.body.filters = {};
        console.log("REPORTTTTT::");
        console.log(report);
        req.body.filters["myUserId"] = res.locals.jwtPayload.u;
        let responseData = yield service.execute(report, req.body.filters);
        res.locals.responseData = responseData;
        res.send(responseData);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
    next();
}));
router.post('/execute/tareas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!("filters" in req.body)) {
            let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .getMany();
            next();
            res.send(r);
        }
        else {
            let r = yield typeorm_1.getConnection().getRepository(PlantillaRonda_1.PlantillaRonda).createQueryBuilder("plantillaRonda")
                .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
                .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
                .leftJoinAndSelect("camposRonda.equipamiento", "equipamiento")
                .leftJoinAndSelect("equipamiento.sistema", "sistema")
                .leftJoinAndSelect("sistema.planta", "planta")
                .where('plantillaRonda.id=' + req.body.filters["id"])
                .getMany();
            next();
            res.send(r);
        }
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=reportsRoutes.js.map