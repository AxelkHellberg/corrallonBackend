"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantaService = void 0;
const PlantaRepository_1 = require("../repository/PlantaRepository");
const GenericService_1 = require("./GenericService");
/****************Configuration******************** */
const myRepository = PlantaRepository_1.PlantaRepository;
/************************************* */
class PlantaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.PlantaService = PlantaService;
//# sourceMappingURL=PlantaService.js.map