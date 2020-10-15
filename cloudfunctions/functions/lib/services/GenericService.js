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
exports.GenericeService = void 0;
let encriptutils = require('../components/encryputils');
class GenericeService {
    constructor(repository) {
        this.genericRepository = repository;
    }
    find(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.genericRepository.find(params);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.genericRepository.findById(id);
        });
    }
    delete(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.genericRepository.delete(obj);
        });
    }
    deleteWhere(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.genericRepository.deleteWhere(where);
        });
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