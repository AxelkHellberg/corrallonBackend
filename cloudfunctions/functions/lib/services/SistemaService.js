"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaService = void 0;
const GenericService_1 = require("./GenericService");
const SistemaRepository_1 = require("../repository/SistemaRepository");
/****************Configuration******************** */
const myRepository = SistemaRepository_1.SistemaRepository;
/************************************* */
class SistemaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.SistemaService = SistemaService;
//# sourceMappingURL=SistemaService.js.map