"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoRondaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const CampoRonda_1 = require("../entity/CampoRonda");
/************CONFIG CLASS**************** */
const myClass = CampoRonda_1.CampoRonda;
/**************************************** */
class CampoRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.CampoRondaRepository = CampoRondaRepository;
//# sourceMappingURL=CampoRondaRepository.js.map