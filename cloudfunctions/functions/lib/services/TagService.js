"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericService_1 = require("./GenericService");
const TagRepository_1 = require("../repository/TagRepository");
/****************Configuration******************** */
const myRepository = TagRepository_1.TagRepository;
/************************************* */
class TagService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
}
exports.TagService = TagService;
//# sourceMappingURL=TagService.js.map