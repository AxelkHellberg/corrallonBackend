"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const PlantillaGuiaManiobra_1 = require("../entity/PlantillaGuiaManiobra");
/************CONFIG CLASS**************** */
const myClass = PlantillaGuiaManiobra_1.PlantillaGuiaManiobra;
/**************************************** */
class PlantillaGuiaManiobraRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.PlantillaGuiaManiobraRepository = PlantillaGuiaManiobraRepository;
//# sourceMappingURL=PlantillaGuiaManiobraRepository.js.map