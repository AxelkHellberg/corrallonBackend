"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaRondaRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const ListaRonda_1 = require("../entity/ListaRonda");
/************CONFIG CLASS**************** */
const myClass = ListaRonda_1.ListaRonda;
/**************************************** */
class ListaRondaRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.ListaRondaRepository = ListaRondaRepository;
//# sourceMappingURL=ListaRondaRepository.js.map