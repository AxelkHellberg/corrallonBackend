"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RondaService = void 0;
const GenericService_1 = require("./GenericService");
const RondaRepository_1 = require("../repository/RondaRepository");
/****************Configuration******************** */
const myRepository = RondaRepository_1.RondaRepository;
/************************************* */
class RondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.RondaService = RondaService;
//# sourceMappingURL=RondaService.js.map