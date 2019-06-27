"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const ValorCampoManiobra_1 = require("../entity/ValorCampoManiobra");
/************CONFIG CLASS**************** */
const myClass = ValorCampoManiobra_1.ValorCampoManiobra;
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
//# sourceMappingURL=ValorCampoManiobraRepository.js.map