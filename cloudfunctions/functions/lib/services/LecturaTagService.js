"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const LecturaTagRepository_1 = require("../repository/LecturaTagRepository");
/****************Configuration******************** */
const myRepository = LecturaTagRepository_1.LecturaTagRepository;
/************************************* */
class LecturaTagService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.LecturaTagService = LecturaTagService;
//# sourceMappingURL=LecturaTagService.js.map