"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoRondaService = void 0;
const GenericService_1 = require("./GenericService");
const CampoRondaRepository_1 = require("../repository/CampoRondaRepository");
/****************Configuration******************** */
const myRepository = CampoRondaRepository_1.CampoRondaRepository;
/************************************* */
class CampoRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.CampoRondaService = CampoRondaService;
//# sourceMappingURL=CampoRondaService.js.map