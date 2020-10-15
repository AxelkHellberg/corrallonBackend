"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialEstadoFallaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const HistorialEstadoFalla_1 = require("../entity/HistorialEstadoFalla");
/************CONFIG CLASS**************** */
const myClass = HistorialEstadoFalla_1.HistorialEstadoFalla;
/**************************************** */
class HistorialEstadoFallaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.HistorialEstadoFallaRepository = HistorialEstadoFallaRepository;
//# sourceMappingURL=HistorialEstadoFallaRepository.js.map