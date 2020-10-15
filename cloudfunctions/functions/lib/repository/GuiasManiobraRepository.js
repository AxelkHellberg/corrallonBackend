"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuiaManiobraRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const GuiaManiobra_1 = require("../entity/GuiaManiobra");
/************CONFIG CLASS**************** */
const myClass = GuiaManiobra_1.GuiaManiobra;
/**************************************** */
class GuiaManiobraRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.GuiaManiobraRepository = GuiaManiobraRepository;
//# sourceMappingURL=GuiasManiobraRepository.js.map