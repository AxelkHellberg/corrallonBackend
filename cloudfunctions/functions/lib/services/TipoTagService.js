"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const TipoTagRepository_1 = require("../repository/TipoTagRepository");
let encriptutils = require('../components/encryputils');
/******************CONFIG CLASS************************** */
const myRepository = TipoTagRepository_1.TipoTagRepository;
/******************************************************** */
class TipoTagService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.TipoTagService = TipoTagService;
//# sourceMappingURL=TipoTagService.js.map