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
exports.addToGenericRoute = void 0;
const apiHandler_1 = require("../components/apiHandler");
exports.addToGenericRoute = function (router, currentClass, service, methods = { "post": true, "get": true, "delete": true, "patch": true, }) {
    if (methods.post) {
        router.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield apiHandler_1.postHandlerGenericEntity(req, res, currentClass, service);
            next();
        }));
    }
    if (methods.get) {
        router.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield apiHandler_1.getHandlerGenericEntity(req, res, currentClass, service);
            next();
        }));
        router.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield apiHandler_1.getByIdHandlerGenericEntity(req, res, currentClass, service);
            next();
        }));
    }
    if (methods.patch) {
        router.patch('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield apiHandler_1.updateHandlerGenericEntity(req, res, currentClass, service);
            next();
        }));
    }
    if (methods.delete) {
        router.delete('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield apiHandler_1.deleteHandlerGenericEntity(req, res, currentClass, service);
            next();
        }));
    }
    return router;
};
//# sourceMappingURL=genericRoutes.js.map