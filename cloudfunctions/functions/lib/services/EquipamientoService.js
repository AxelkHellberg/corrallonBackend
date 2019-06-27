"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const EquipamientoRepository_1 = require("../repository/EquipamientoRepository");
/****************Configuration******************** */
const myRepository = EquipamientoRepository_1.EquipamientoRepository;
/************************************* */
class EquipamientoService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.EquipamientoService = EquipamientoService;
//# sourceMappingURL=EquipamientoService.js.map