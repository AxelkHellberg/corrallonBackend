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
const User_1 = require("../entity/User");
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
let encriptutils = require('../components/encryputils');
const myClass = User_1.User;
class UserRepository extends GenericRepository_1.GenericRepository {
    constructor() {
        super(...arguments);
        this.existeUsernameToInsert = function (username) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.getRepository().findOne({ where: { "username": username } });
                return user != null;
            });
        };
        this.existeUsernameToUpdate = function (username, id) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.getRepository().findOne({ where: { "username": username, "id": typeorm_1.Not(id) } });
                return user != null;
            });
        };
        this.login = function (username, password) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.getRepository().findOne({ where: { "username": username, "password": encriptutils.encrypt(password) } });
                return user;
            });
        };
    }
    getRepository() {
        return typeorm_1.getRepository(myClass);
    }
    getClass() {
        return myClass;
    }
    save(newObj) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.existeUsernameToInsert(newObj.username))
                throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.USERNAME_DUPLICATED, msg_1.Msg.USERNAME_DUPLICATED, 400);
            return _super.save.call(this, newObj);
        });
    }
    updateById(data, id) {
        const _super = Object.create(null, {
            updateById: { get: () => super.updateById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (data.username != null && (yield this.existeUsernameToUpdate(data.username, id)))
                throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.USERNAME_DUPLICATED, msg_1.Msg.USERNAME_DUPLICATED, 400);
            return _super.updateById.call(this, data, id);
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map