"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const TipoTag_1 = require("../entity/TipoTag");
/************CONFIG CLASS**************** */
const myClass = TipoTag_1.TipoTag;
/**************************************** */
class TipoTagRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.TipoTagRepository = TipoTagRepository;
//# sourceMappingURL=TipoTagRepository.js.map