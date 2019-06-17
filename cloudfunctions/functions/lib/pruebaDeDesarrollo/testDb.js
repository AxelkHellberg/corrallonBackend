"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const UserRepository_1 = require("../repository/UserRepository");
function existeUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = typeorm_1.getRepository(User_1.User);
        const list = yield userRepository.findOne({ where: { "username": username } });
        return list == null;
    });
}
typeorm_1.createConnection().then(() => __awaiter(this, void 0, void 0, function* () {
    let ur = new UserRepository_1.UserRepository();
    let userId = 2;
    let reportId = 1;
    let u = yield ur.getRepository().createQueryBuilder("user")
        .leftJoinAndSelect("user.profile", "profile")
        .leftJoinAndSelect("profile.reportAvailable", "report")
        .where("user.id = :userId and  report.id=:reportId", { userId, reportId })
        .getOne();
    return u != null;
}));
/*createConnection().then(() => {
    let u: UserService = new UserService()
    u.hasPermissionsTest(2, "/entities/users/", 1).then(
        (a) => console.log("%j", a)
    ).catch(e => { console.log(e) })
})*/ 
//# sourceMappingURL=testDb.js.map