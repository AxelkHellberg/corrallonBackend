"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoSistemaService = void 0;
const GenericService_1 = require("./GenericService");
const TipoSistemaRepository_1 = require("../repository/TipoSistemaRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = TipoSistemaRepository_1.TipoSistemaRepository;
/******************************************************** */
class TipoSistemaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.TipoSistemaService = TipoSistemaService;
//# sourceMappingURL=TipoSistemaService.js.map