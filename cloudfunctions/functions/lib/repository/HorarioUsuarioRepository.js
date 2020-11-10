"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioUsuarioRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const HorarioPersona_1 = require("../entity/HorarioPersona");
/************CONFIG CLASS**************** */
const myClass = HorarioPersona_1.HorarioPersona;
/**************************************** */
class HorarioUsuarioRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.HorarioUsuarioRepository = HorarioUsuarioRepository;
//# sourceMappingURL=HorarioUsuarioRepository.js.map