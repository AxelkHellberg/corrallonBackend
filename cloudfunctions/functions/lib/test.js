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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const NotificacionFalla_1 = require("./entity/NotificacionFalla");
typeorm_1.createConnection().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    let r = yield connection.getRepository(NotificacionFalla_1.NotificacionFalla).createQueryBuilder("notificacionFalla")
        .leftJoinAndSelect("notificacionFalla.valoresCamposManiobras", "valoresCamposManiobras")
        .leftJoinAndSelect("notificacionFalla.fallasSistema", "fallasSistema")
        .leftJoinAndSelect("notificacionFalla.fallasEquipamiento", "fallasEquipamiento")
        .leftJoinAndSelect("notificacionFalla.valoresCamposRonda", "valoresCamposRonda")
        .leftJoinAndSelect("notificacionFalla.estadoFalla", "estadoFalla")
        .leftJoinAndSelect("notificacionFalla.tipoFalla", "tipoFalla")
        .leftJoinAndSelect("valoresCamposManiobras.guiaManiobra", "guiaManiobra")
        .leftJoinAndSelect("valoresCamposManiobras.campoManiobra", "campoManiobra")
        .leftJoinAndSelect("campoManiobra.sistema", "sistema")
        .leftJoinAndSelect("guiaManiobra.user", "user")
        .getMany();
    console.log("%j", r);
    //  createReporteFalla(connection)
})).catch(error => console.log(error));
//# sourceMappingURL=test.js.map