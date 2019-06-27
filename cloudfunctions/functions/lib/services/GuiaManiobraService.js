"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const GuiasManiobraRepository_1 = require("../repository/GuiasManiobraRepository");
/****************Configuration******************** */
const myRepository = GuiasManiobraRepository_1.GuiaManiobraRepository;
/************************************* */
class GuiaManiobraService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.GuiaManiobraService = GuiaManiobraService;
//# sourceMappingURL=GuiaManiobraService.js.map