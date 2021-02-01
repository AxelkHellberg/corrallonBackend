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
const HorarioPersona_1 = require("../entity/HorarioPersona");
const HorarioUsuarioService_1 = require("../services/HorarioUsuarioService");
const typeorm_1 = require("typeorm");
const global_1 = require("../global");
const apiHandler_1 = require("../components/apiHandler");
/******************************************** */
const service = new HorarioUsuarioService_1.HorarioUsuarioService();
const currentClass = HorarioPersona_1.HorarioPersona;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
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
module.exports = router;
//# sourceMappingURL=horarioUsuarioRoutes.js.map