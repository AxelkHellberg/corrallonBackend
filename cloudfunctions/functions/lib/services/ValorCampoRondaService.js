"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const ValorCampoRonda_1 = require("../entity/ValorCampoRonda");
/****************Configuration******************** */
const myRepository = ValorCampoRonda_1.ValorCampoRonda;
/************************************* */
class ValorCampoRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.ValorCampoRondaService = ValorCampoRondaService;
//# sourceMappingURL=ValorCampoRondaService.js.map