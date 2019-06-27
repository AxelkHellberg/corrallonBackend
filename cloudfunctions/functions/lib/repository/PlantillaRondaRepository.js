"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const PlantillaRonda_1 = require("../entity/PlantillaRonda");
/************CONFIG CLASS**************** */
const myClass = PlantillaRonda_1.PlantillaRonda;
/**************************************** */
class PlantillaRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.PlantillaRondaRepository = PlantillaRondaRepository;
//# sourceMappingURL=PlantillaRondaRepository.js.map