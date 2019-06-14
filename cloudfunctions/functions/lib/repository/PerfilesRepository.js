"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const Profile_1 = require("../entity/Profile");
class ProlfileRepository extends GenericRepository_1.GenericRepository {
    getRepository() {
        return typeorm_1.getRepository(Profile_1.Profile);
    }
    getClass() {
        return Profile_1.Profile;
    }
}
exports.ProlfileRepository = ProlfileRepository;
//# sourceMappingURL=PerfilesRepository.js.map