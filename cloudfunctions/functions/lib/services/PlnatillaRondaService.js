"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const PlantillaRondaRepository_1 = require("../repository/PlantillaRondaRepository");
/****************Configuration******************** */
const myRepository = PlantillaRondaRepository_1.PlantillaRondaRepository;
/************************************* */
class PlantillaRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.PlantillaRondaService = PlantillaRondaService;
//# sourceMappingURL=PlnatillaRondaService.js.map