"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoRondaPlantillaRondaService = void 0;
const GenericService_1 = require("./GenericService");
const CampoRondaPlantillaRondaRepository_1 = require("../repository/CampoRondaPlantillaRondaRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = CampoRondaPlantillaRondaRepository_1.CampoRondaPlantillaRondaRepository;
/******************************************************** */
class CampoRondaPlantillaRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.CampoRondaPlantillaRondaService = CampoRondaPlantillaRondaService;
//# sourceMappingURL=CampoRondaPlantillaRondaService.js.map