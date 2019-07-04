"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const FallaSistemaRepository_1 = require("../repository/FallaSistemaRepository");
/****************Configuration******************** */
const myRepository = FallaSistemaRepository_1.FallaSistemaRepository;
/************************************* */
class HistorialEstadoFallaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.HistorialEstadoFallaService = HistorialEstadoFallaService;
//# sourceMappingURL=HistorialEstadoFallaService.js.map