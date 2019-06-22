"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Equipamiento_1 = require("../entity/Equipamiento");
/************CONFIG CLASS**************** */
const myClass = Equipamiento_1.Equipamiento;
/**************************************** */
class EquipamientoRepository extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.EquipamientoRepository = EquipamientoRepository;
//# sourceMappingURL=EquipamientoRepository.js.map