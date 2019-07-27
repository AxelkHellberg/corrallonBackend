"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const HistorialEstadoFallaRepository_1 = require("../repository/HistorialEstadoFallaRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = HistorialEstadoFallaRepository_1.HistorialEstadoFallaRepository;
/******************************************************** */
class HistorialEstadoFallaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.HistorialEstadoFallaService = HistorialEstadoFallaService;
//# sourceMappingURL=HistorialEstadoFallaService.js.map