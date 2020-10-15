"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Tag_1 = require("../entity/Tag");
/************CONFIG CLASS**************** */
const myClass = Tag_1.Tag;
/**************************************** */
class TagRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.TagRepository = TagRepository;
//# sourceMappingURL=TagRepository.js.map