"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioUsuarioService = void 0;
const GenericService_1 = require("./GenericService");
const HorarioUsuarioRepository_1 = require("../repository/HorarioUsuarioRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = HorarioUsuarioRepository_1.HorarioUsuarioRepository;
/******************************************************** */
class HorarioUsuarioService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.HorarioUsuarioService = HorarioUsuarioService;
//# sourceMappingURL=HorarioUsuarioService.js.map