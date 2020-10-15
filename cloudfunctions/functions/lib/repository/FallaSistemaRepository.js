"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallaSistemaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const FallaSistema_1 = require("../entity/FallaSistema");
/************CONFIG CLASS**************** */
const myClass = FallaSistema_1.FallaSistema;
/**************************************** */
class FallaSistemaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.FallaSistemaRepository = FallaSistemaRepository;
//# sourceMappingURL=FallaSistemaRepository.js.map