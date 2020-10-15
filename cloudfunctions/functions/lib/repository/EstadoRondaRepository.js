"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoRondaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const EstadoRonda_1 = require("../entity/EstadoRonda");
/************CONFIG CLASS**************** */
const myClass = EstadoRonda_1.EstadoRonda;
/**************************************** */
class EstadoRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.EstadoRondaRepository = EstadoRondaRepository;
//# sourceMappingURL=EstadoRondaRepository.js.map