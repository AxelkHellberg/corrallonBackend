"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadMedidaService = void 0;
const GenericService_1 = require("./GenericService");
const UnidadMedidaRepository_1 = require("../repository/UnidadMedidaRepository");
/****************Configuration******************** */
const myRepository = UnidadMedidaRepository_1.UnidadMedidaRepository;
/************************************* */
class UnidadMedidaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.UnidadMedidaService = UnidadMedidaService;
//# sourceMappingURL=UnidadMedidaService.js.map