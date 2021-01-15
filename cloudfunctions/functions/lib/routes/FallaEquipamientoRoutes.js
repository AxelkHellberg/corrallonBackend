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
const genericRoutes_1 = require("./genericRoutes");
const FallaEquipamientoService_1 = require("../services/FallaEquipamientoService");
const FallaEquipamiento_1 = require("../entity/FallaEquipamiento");
const typeorm_1 = require("typeorm");
const global_1 = require("../global");
const apiHandler_1 = require("../components/apiHandler");
var express = require('express');
var router = express.Router();
/******************************************** */
const service = new FallaEquipamientoService_1.FallaEquipamientoService();
const currentClass = FallaEquipamiento_1.FallaEquipamiento;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
router.post('/NotificarFalla', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".notificacion_falla (descripcion,estadoFallaId,TipoFallaId,FallaDe) VALUES ('" + req.body.descripcionFalla + "',1," + req.body.tipoFallaId + ",1) ");
        let r = yield typeorm_1.getConnection().query("INSERT INTO " + global_1.GlobalVariable.DATA_BASE_NAME + ".falla_equipamiento (equipamientoId,notificacionFallaId) VALUES(" + req.body.equipoId + ",(SELECT * FROM ultimoInsertadoNotificacionFalla))");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=FallaEquipamientoRoutes.js.map