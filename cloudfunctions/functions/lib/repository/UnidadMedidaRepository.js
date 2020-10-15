"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadMedidaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const UnidadMedida_1 = require("../entity/UnidadMedida");
/************CONFIG CLASS**************** */
const myClass = UnidadMedida_1.UnidadMedida;
/**************************************** */
class UnidadMedidaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.UnidadMedidaRepository = UnidadMedidaRepository;
//# sourceMappingURL=UnidadMedidaRepository.js.map