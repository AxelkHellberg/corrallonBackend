"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const CampoManiobra_1 = require("../entity/CampoManiobra");
/************CONFIG CLASS**************** */
const myClass = CampoManiobra_1.CampoManiobra;
/**************************************** */
class CampoManiobraRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.CampoManiobraRepository = CampoManiobraRepository;
//# sourceMappingURL=CampoManiobraRepository.js.map