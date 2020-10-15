"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RondaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Ronda_1 = require("../entity/Ronda");
/************CONFIG CLASS**************** */
const myClass = Ronda_1.Ronda;
/**************************************** */
class RondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.RondaRepository = RondaRepository;
//# sourceMappingURL=RondaRepository.js.map