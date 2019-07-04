"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const FallaEquipamiento_1 = require("../entity/FallaEquipamiento");
/************CONFIG CLASS**************** */
const myClass = FallaEquipamiento_1.FallaEquipamiento;
/**************************************** */
class FallaEquipamientoRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.FallaEquipamientoRepository = FallaEquipamientoRepository;
//# sourceMappingURL=FallaEquipamientoRepository.js.map