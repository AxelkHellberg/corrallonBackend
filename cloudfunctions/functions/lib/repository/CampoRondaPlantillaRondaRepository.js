"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoRondaPlantillaRondaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const CampoRondaPlantillaRonda_1 = require("../entity/CampoRondaPlantillaRonda");
/************CONFIG CLASS**************** */
const myClass = CampoRondaPlantillaRonda_1.CampoRondaPlantillaRonda;
/**************************************** */
class CampoRondaPlantillaRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.CampoRondaPlantillaRondaRepository = CampoRondaPlantillaRondaRepository;
//# sourceMappingURL=CampoRondaPlantillaRondaRepository.js.map