"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const EstadoRondaRepository_1 = require("../repository/EstadoRondaRepository");
/****************Configuration******************** */
const myRepository = EstadoRondaRepository_1.EstadoRondaRepository;
/************************************* */
class EstadoRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.EstadoRondaService = EstadoRondaService;
//# sourceMappingURL=EstadoRondaService.js.map