"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const TipoCampoRonda_1 = require("../entity/TipoCampoRonda");
/************CONFIG CLASS**************** */
const myClass = TipoCampoRonda_1.TipoCampoRonda;
/**************************************** */
class TipoCampoRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.TipoCampoRondaRepository = TipoCampoRondaRepository;
//# sourceMappingURL=TipoCampoRondaRepository.js.map