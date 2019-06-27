"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const LecturaTag_1 = require("../entity/LecturaTag");
/************CONFIG CLASS**************** */
const myClass = LecturaTag_1.LecturaTag;
/**************************************** */
class LecturaTagRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.LecturaTagRepository = LecturaTagRepository;
//# sourceMappingURL=LecturaTagRepository.js.map