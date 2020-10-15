"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantillaGuiaManiobraService = void 0;
const GenericService_1 = require("./GenericService");
const PlantillaGuiaManiobraRepository_1 = require("../repository/PlantillaGuiaManiobraRepository");
/****************Configuration******************** */
const myRepository = PlantillaGuiaManiobraRepository_1.PlantillaGuiaManiobraRepository;
/************************************* */
class PlantillaGuiaManiobraService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.PlantillaGuiaManiobraService = PlantillaGuiaManiobraService;
//# sourceMappingURL=PlantillaGuiaManiobra.js.map