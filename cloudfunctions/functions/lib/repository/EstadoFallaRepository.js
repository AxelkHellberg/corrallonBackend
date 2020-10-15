"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoFallaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const EstadoFalla_1 = require("../entity/EstadoFalla");
/************CONFIG CLASS**************** */
const myClass = EstadoFalla_1.EstadoFalla;
/**************************************** */
class EstadoFallaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.EstadoFallaRepository = EstadoFallaRepository;
//# sourceMappingURL=EstadoFallaRepository.js.map