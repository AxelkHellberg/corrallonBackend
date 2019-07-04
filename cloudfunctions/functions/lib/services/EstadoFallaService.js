"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const EstadoFallaRepository_1 = require("../repository/EstadoFallaRepository");
/****************Configuration******************** */
const myRepository = EstadoFallaRepository_1.EstadoFallaRepository;
/************************************* */
class EstadoFallaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.EstadoFallaService = EstadoFallaService;
//# sourceMappingURL=EstadoFallaService.js.map