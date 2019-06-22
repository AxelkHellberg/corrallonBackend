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
const UserRepository_1 = require("../repository/UserRepository");
const GenericService_1 = require("./GenericService");
let encriptutils = require('../components/encryputils');
const myRepository = UserRepository_1.UserRepository;
class UserService extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
        this.login = function (username, password) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.genericRepository.login(username, password);
            });
        };
    }
    find(params = {}) {
        const _super = Object.create(null, {
            find: { get: () => super.find }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield _super.find.call(this, params);
            console.log(users);
            for (let i = 0; i < users.length; i++)
                delete users[i]["password"];
            return users;
        });
    }
    findById(id) {
        const _super = Object.create(null, {
            findById: { get: () => super.findById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield _super.findById.call(this, id);
            delete user["password"];
            return user;
        });
    }
    hasPermissionsEntity(idUser, path, idHttp) {
        return __awaiter(this, void 0, void 0, function* () {
            let u = yield this.genericRepository.getRepository().createQueryBuilder("user")
                .leftJoinAndSelect("user.profile", "profile")
                .leftJoinAndSelect("profile.permissionsWS", "permissionsWS")
                .leftJoinAndSelect("permissionsWS.httpMethod", "httpMethod")
                .where("user.id = :idUser and  :path REGEXP  permissionsWS.servicePath and httpMethod.id = :idHttp", { idUser, path, idHttp })
                //            .where("user.id = :id and  :path LIKE '/users/__%' ", { id: 2, path: "/users/" })
                .getOne();
            return u != null;
        });
    }
    hasPermissionsReport(idUser, reportId) {
        return __awaiter(this, void 0, void 0, function* () {
            let u = yield this.genericRepository.getRepository().createQueryBuilder("user")
                .leftJoinAndSelect("user.profile", "profile")
                .leftJoinAndSelect("profile.reportAvailable", "report")
                .where("user.id = :idUser and  report.id=:reportId", { idUser, reportId })
                .getOne();
            console.log(u);
            return u != null;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map