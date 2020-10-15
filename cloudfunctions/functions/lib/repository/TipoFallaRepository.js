"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoFallaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const TipoFalla_1 = require("../entity/TipoFalla");
/************CONFIG CLASS**************** */
const myClass = TipoFalla_1.TipoFalla;
/**************************************** */
class TipoFallaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.TipoFallaRepository = TipoFallaRepository;
//# sourceMappingURL=TipoFallaRepository.js.map