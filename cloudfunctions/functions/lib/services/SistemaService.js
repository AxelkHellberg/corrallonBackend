"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const SistemaRepository_1 = require("../repository/SistemaRepository");
/****************Configuration******************** */
const myRepository = SistemaRepository_1.SistemaRepository;
/************************************* */
class SistemaService extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.SistemaService = SistemaService;
//# sourceMappingURL=SistemaService.js.map