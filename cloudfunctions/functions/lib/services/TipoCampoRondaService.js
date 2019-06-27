"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const TipoCampoRondaRepository_1 = require("../repository/TipoCampoRondaRepository");
/****************Configuration******************** */
const myRepository = TipoCampoRondaRepository_1.TipoCampoRondaRepository;
/************************************* */
class TipoCampoRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.TipoCampoRondaService = TipoCampoRondaService;
//# sourceMappingURL=TipoCampoRondaService.js.map