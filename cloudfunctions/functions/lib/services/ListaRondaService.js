"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaRondaService = void 0;
const GenericService_1 = require("./GenericService");
const ListaRondaRepository_1 = require("../repository/ListaRondaRepository");
/****************Configuration******************** */
const myRepository = ListaRondaRepository_1.ListaRondaRepository;
/************************************* */
class ListaRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.ListaRondaService = ListaRondaService;
//# sourceMappingURL=ListaRondaService.js.map