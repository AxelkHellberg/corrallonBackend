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
const Planta_1 = require("./entity/Planta");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    let r = yield connection.getRepository(Planta_1.Planta).createQueryBuilder("planta")
        .leftJoinAndSelect("planta.sistemas", "sistemas", null, { guiaManiobraId: 1, bb: 2 })
        .leftJoinAndSelect("sistemas.camposManiobras", "camposManiobras", null, { guiaManiobraId: 1, bb: 2 })
        .leftJoinAndSelect("camposManiobras.valoresCamposManiobras", "valoresCamposManiobras", "valoresCamposManiobras.campoManiobraId=camposManiobras.id and valoresCamposManiobras.guiaManiobraId=:guiaManiobraId", { guiaManiobraId: 1, bb: 2 })
        .where("(valoresCamposManiobras.guiaManiobraId=1 or valoresCamposManiobras.guiaManiobraId is null) and camposManiobras.plantillaGuiaManiobraId=1")
        .getMany();
    console.log("%j", r);
})).catch(error => console.log(error));
//# sourceMappingURL=test.js.map