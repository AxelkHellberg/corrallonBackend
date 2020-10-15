"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorCampoRondaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const ValorCampoRonda_1 = require("../entity/ValorCampoRonda");
/************CONFIG CLASS**************** */
const myClass = ValorCampoRonda_1.ValorCampoRonda;
/**************************************** */
class ValorCampoRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.ValorCampoRondaRepository = ValorCampoRondaRepository;
//# sourceMappingURL=ValorCampoRondaRepository.js.map