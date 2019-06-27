"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const ValorCampoRonda_1 = require("../entity/ValorCampoRonda");
/************CONFIG CLASS**************** */
const myClass = ValorCampoRonda_1.ValorCampoRonda;
/**************************************** */
class ValorCampoManiobraRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.ValorCampoManiobraRepository = ValorCampoManiobraRepository;
//# sourceMappingURL=ValorCampoRondaRepository.js.map