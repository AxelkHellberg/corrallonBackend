"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Sistema_1 = require("../entity/Sistema");
/************CONFIG CLASS**************** */
const myClass = Sistema_1.Sistema;
/**************************************** */
class SistemaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.SistemaRepository = SistemaRepository;
//# sourceMappingURL=SistemaRepository.js.map