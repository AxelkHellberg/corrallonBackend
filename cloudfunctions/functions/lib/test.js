"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ValorCampoManiobra_1 = require("./entity/ValorCampoManiobra");
const ValorCampoManiobraService_1 = require("./services/ValorCampoManiobraService");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    let valor = new ValorCampoManiobra_1.ValorCampoManiobra();
    valor.campoManiobraId = 1;
    valor.guiaManiobraId = 2;
    valor.valor = true;
    let v = new ValorCampoManiobraService_1.ValorCampoManiobraService();
    yield v.save(valor);
    /*let perfil = new Profile()
    perfil.id = 1
    connection.manager
      .createQueryBuilder()
      .relation(Profile, "permissionsWS")
      .of(perfil)
      .add(permiso);*/
})).catch(error => console.log(error));
//# sourceMappingURL=test.js.map