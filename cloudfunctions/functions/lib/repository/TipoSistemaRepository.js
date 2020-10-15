"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoSistemaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const TipoSistema_1 = require("../entity/TipoSistema");
/************CONFIG CLASS**************** */
const myClass = TipoSistema_1.TipoSistema;
/**************************************** */
class TipoSistemaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.TipoSistemaRepository = TipoSistemaRepository;
//# sourceMappingURL=TipoSistemaRepository.js.map