"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const TipoFallaRepository_1 = require("../repository/TipoFallaRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = TipoFallaRepository_1.TipoFallaRepository;
/******************************************************** */
class TipoFallaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.TipoFallaService = TipoFallaService;
//# sourceMappingURL=TipoFallaService.js.map