"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const FallaEquipamientoRepository_1 = require("../repository/FallaEquipamientoRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = FallaEquipamientoRepository_1.FallaEquipamientoRepository;
/******************************************************** */
class FallaEquipamientoService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.FallaEquipamientoService = FallaEquipamientoService;
//# sourceMappingURL=FallaEquipamientoService.js.map