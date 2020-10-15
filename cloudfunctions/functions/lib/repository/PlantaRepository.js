"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Planta_1 = require("../entity/Planta");
/************CONFIG CLASS**************** */
const myClass = Planta_1.Planta;
/**************************************** */
class PlantaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.PlantaRepository = PlantaRepository;
//# sourceMappingURL=PlantaRepository.js.map