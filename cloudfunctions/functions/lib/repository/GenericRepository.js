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
const dbHandler_1 = require("../components/dbHandler");
const DBConection_1 = require("../config/DBConection");
class GenericRepository {
    constructor() {
        this.find = function (params = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                let builder = yield this.getRepository().createQueryBuilder(DBConection_1.DBConection.ENTITY_REF_NAME);
                if ("select" in params) {
                    let newSelect = [];
                    //*1 To use the method "select" correctly, we must to add the ENTITY_REF_NAME to each column. In others the cases, typeorm will return an empty array
                    for (let i = 0; i < params.select.length; i++)
                        newSelect[i] = DBConection_1.DBConection.ENTITY_REF_NAME + "." + params.select[i];
                    builder = yield builder.select(newSelect);
                }
                if ("q" in params)
                    builder = yield builder.where(params.q);
                if ("order" in params)
                    builder = yield builder.orderBy(params.order);
                let limit = 20000;
                if ("limit" in params && params.limit < 20000)
                    limit = params.limit;
                builder = yield builder.limit(limit);
                if ("offset" in params)
                    builder = yield builder.offset(params.offset);
                let objs = yield builder.getMany();
                //If you didn't use select propertie, we just return the object that we had gotten from the database
                if (!("select" in params))
                    return objs;
                //in some cases, the object could have other attributes besides those that come from the selection of *1
                let newObjs = [];
                for (let i = 0; i < objs.length; i++) {
                    newObjs[i] = {};
                    for (let j = 0; j < params.select.length; j++)
                        newObjs[i][params.select[j]] = objs[i][params.select[j]];
                }
                return newObjs;
            });
        };
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().createQueryBuilder(DBConection_1.DBConection.ENTITY_REF_NAME).where("id=" + id).getOne();
        });
    }
    updateById(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            delete data[id];
            return yield dbHandler_1.getConnectionDatabase().createQueryBuilder()
                .update(this.getClass())
                .set(data)
                .where("id = :id", { "id": id })
                .execute();
        });
    }
    save(newObj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbHandler_1.getConnectionDatabase().manager.save(newObj);
        });
    }
    delete(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbHandler_1.getConnectionDatabase().manager.remove(obj);
        });
    }
    deleteWhere(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository()
                .createQueryBuilder()
                .delete()
                .from(this.getClass())
                .where(where)
                .execute();
        });
    }
}
exports.GenericRepository = GenericRepository;
//# sourceMappingURL=GenericRepository.js.map