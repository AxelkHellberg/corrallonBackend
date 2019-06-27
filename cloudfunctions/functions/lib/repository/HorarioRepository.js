"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Horario_1 = require("../entity/Horario");
/************CONFIG CLASS**************** */
const myClass = Horario_1.Horario;
/**************************************** */
class HorarioRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.HorarioRepository = HorarioRepository;
//# sourceMappingURL=HorarioRepository.js.map