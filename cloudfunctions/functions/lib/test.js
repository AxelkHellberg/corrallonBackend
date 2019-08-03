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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    let r = yield connection.getRepository(User_1.User).createQueryBuilder("user")
        .leftJoinAndSelect("user.profile", "profile")
        .where("user.id=:myUserId", { myUserId: 1 })
        .getMany();
    console.log("%j", r);
    //  createReporteFalla(connection)
})).catch(error => console.log(error));
//# sourceMappingURL=test.js.map