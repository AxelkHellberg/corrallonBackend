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
const RondaService_1 = require("../services/RondaService");
const Ronda_1 = require("../entity/Ronda");
const ValorCampoRonda_1 = require("../entity/ValorCampoRonda");
const ValorCampoRondaService_1 = require("../services/ValorCampoRondaService");
const NotificacionFallaService_1 = require("../services/NotificacionFallaService");
const NotificacionFalla_1 = require("../entity/NotificacionFalla");
const typeorm_1 = require("typeorm");
const global_1 = require("../global");
const apiHandler_1 = require("../components/apiHandler");
/******************************************** */
const service = new RondaService_1.RondaService();
const currentClass = Ronda_1.Ronda;
/******************************************** */
router = genericRoutes_1.addToGenericRoute(router, currentClass, service);
router.post('/:id/valores-fallas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("CREANDO RONDAAAAAAAAAAAAAAAAAAAAA");
    let data = req.body;
    let valorCampoRondaService = new ValorCampoRondaService_1.ValorCampoRondaService();
    let notificacionFallaService = new NotificacionFallaService_1.NotificacionFallaService();
    console.log("Creando ronda");
    for (let i = 0; i < data.length; i++) {
        try {
            if ("notificacionFalla" in data[i]) { //Si el valor del campo tiene una notificacion de falla asociada, la creamos 
                let falla = new NotificacionFalla_1.NotificacionFalla();
                Object.assign(falla, data[i]["notificacionFalla"]);
                falla = yield notificacionFallaService.save(falla);
                data[i]["notificacionFallaId"] = falla.id; //Asignamos el id en la variable "data" que es la que devuelve el response
            }
            let valorCampoRonda = new ValorCampoRonda_1.ValorCampoRonda(); //creada la falla, obtenemos el valor del campo
            Object.assign(valorCampoRonda, data[i]);
            console.log(valorCampoRonda);
            valorCampoRonda.rondaId = req.params.id; //obtenemos la guia de maniobra desde el url param
            valorCampoRonda = yield valorCampoRondaService.save(valorCampoRonda);
            data[i]["id"] = valorCampoRonda.id; //Asignamos el id del valor en la data a devolver
            data[i]["hasError"] = false; //Si todo salio ok, devolvemos que no hay error
        }
        catch (e) {
            data[i]["hasError"] = true; //Si algo falla devolvemos que hubo error
            data[i]["error"] = e; //Indicamos cual fue el error
            if ("notificacionFallaId" in data[i]) { //Si se genero una notificacion de falla la borramos. Esto lo hacemos porque no usamos transaccion con rollbacks
                yield notificacionFallaService.delete(data[i]["notificacionFallaId"]);
                delete data[i]["notificacionFallaId"];
            }
        }
    }
    res.send(data);
    next();
}));
router.post('/traerRondas', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield typeorm_1.getConnection().query("SELECT r.id rondaId,pr.id,pr.createdAt,pr.funcionamientoEquipo,pr.funcionamientoSistema ,pr.horarios,pr.nombre ,pr.obligatorioEquipo ,pr.obligatorioSistema ,pr.updateAt FROM " + global_1.GlobalVariable.DATA_BASE_NAME + ".ronda r INNER JOIN " + global_1.GlobalVariable.DATA_BASE_NAME + ".plantilla_ronda pr ON r.plantillaRondaId = pr.id ");
        console.log("res");
        console.log(r);
        res.status(200).send(r);
    }
    catch (e) {
        yield apiHandler_1.responseError(res, e);
    }
}));
module.exports = router;
//# sourceMappingURL=rondasRoutes.js.map