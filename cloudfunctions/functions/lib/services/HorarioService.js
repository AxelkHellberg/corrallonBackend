"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const HorarioRepository_1 = require("../repository/HorarioRepository");
/****************Configuration******************** */
const myRepository = HorarioRepository_1.HorarioRepository;
/************************************* */
class HorarioService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.HorarioService = HorarioService;
//# sourceMappingURL=HorarioService.js.map