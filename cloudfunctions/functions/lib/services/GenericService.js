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
let encriptutils = require('../components/encryputils');
class GenericeService {
    constructor(repository) {
        this.find = function () {
            return __awaiter(this, void 0, void 0, function* () {
                const objs = yield this.genericRepository.find();
                return objs;
            });
        };
        this.genericRepository = repository;
    }
    updateById(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.genericRepository.updateById(data, id);
        });
    }
    save(newObj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.genericRepository.save(newObj);
        });
    }
}
exports.GenericeService = GenericeService;
//# sourceMappingURL=GenericService.js.map