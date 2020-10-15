"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallaSistemaService = void 0;
const GenericService_1 = require("./GenericService");
const FallaSistemaRepository_1 = require("../repository/FallaSistemaRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = FallaSistemaRepository_1.FallaSistemaRepository;
/******************************************************** */
class FallaSistemaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.FallaSistemaService = FallaSistemaService;
//# sourceMappingURL=FallaSistemaService.js.map