"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProlfileRepository = void 0;
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Profile_1 = require("../entity/Profile");
/************CONFIG CLASS**************** */
const myClass = Profile_1.Profile;
/**************************************** */
class ProlfileRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
}
exports.ProlfileRepository = ProlfileRepository;
//# sourceMappingURL=PerfilesRepository.js.map