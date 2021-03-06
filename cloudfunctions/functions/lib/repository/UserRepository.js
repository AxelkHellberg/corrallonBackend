"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../entity/User");
const GenericRepository_1 = require("./GenericRepository");
const typeorm_1 = require("typeorm");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Msg_1 = require("../msg/Msg");
let encriptutils = require('../components/encryputils');
/************CONFIG CLASS**************** */
const myClass = User_1.User;
/**************************************** */
class UserRepository /**config *//**config */  extends GenericRepository_1.GenericRepository {
    constructor() {
        super(...arguments);
        this.existeUsernameToInsert = function (username) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.getRepository().findOne({ where: { "LoginName": username } });
                return user != null;
            });
        };
        this.existeUsernameToUpdate = function (username, id) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield this.getRepository().findOne({ where: { "LoginName": username, "id": typeorm_1.Not(id) } });
                return user != null;
            });
        };
        /*     login = async function (username, password): Promise<Users> {
                const user: Users = await this.getRepository().findOne({ where: { "LoginName": username, "Password": encriptutils.encrypt(password) } });
                return user
            } */
        this.login = function (username, password) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield typeorm_1.getConnection().query("SELECT * FROM users WHERE LoginName='" + username + "' and Password=" + password);
                return user;
            });
        };
        /*     public async delete(delObj: User): Promise<any> {
                if (delObj.id == 1){
                    throw new ErrorVDF(Msg.USUARIO_ADMINISTRADOR_NO_ELIMINABLE,Msg.USUARIO_ADMINISTRADOR_NO_ELIMINABLE, 400)
                }
                return super.delete(delObj);
            } */
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
            if (yield this.existeUsernameToInsert(newObj.LoginName))
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.USERNAME_DUPLICATED, Msg_1.Msg.USERNAME_DUPLICATED, 400);
            return _super.save.call(this, newObj);
        });
    }
    updateById(data, id) {
        const _super = Object.create(null, {
            updateById: { get: () => super.updateById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (data.username != null && (yield this.existeUsernameToUpdate(data.username, id)))
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.USERNAME_DUPLICATED, Msg_1.Msg.USERNAME_DUPLICATED, 400);
            return _super.updateById.call(this, data, id);
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map