"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoManiobraService = void 0;
const GenericService_1 = require("./GenericService");
const CampoManiobraRepository_1 = require("../repository/CampoManiobraRepository");
/****************Configuration******************** */
const myRepository = CampoManiobraRepository_1.CampoManiobraRepository;
/************************************* */
class CampoManiobraService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.CampoManiobraService = CampoManiobraService;
//# sourceMappingURL=CamposManiobraService.js.map