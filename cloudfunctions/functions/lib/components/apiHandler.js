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
const ErrorVDF_1 = require("./ErrorVDF");
const responseError = function (res, e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e instanceof ErrorVDF_1.ErrorVDF)
            res.status(e.responseCode).send({ "responseCode": e.responseCode == 0 ? 500 : e.responseCode, "internalMessage": e.internalMessage, "userMessage": e.userMessage });
        else
            res.status(500).send({ "responseCode": 500, "internalMessage": e.toString(), "userMessage": e.toString() });
    });
};
exports.responseError = responseError;
const getHandlerGenericEntity = function (req, res, classEntity, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const objs = yield repository.find();
            res.send(objs);
        }
        catch (e) {
            yield responseError(res, new ErrorVDF_1.ErrorVDF(e.toString(), e.toString()));
        }
    });
};
exports.getHandlerGenericEntity = getHandlerGenericEntity;
const postHandlerGenericEntity = function (req, res, classEntity, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        let newObj = new classEntity();
        console.log(req.body);
        Object.assign(newObj, req.body);
        try {
            yield repository.save(newObj);
            res.send(newObj);
        }
        catch (e) {
            yield responseError(res, e);
        }
    });
};
exports.postHandlerGenericEntity = postHandlerGenericEntity;
/**
 * This function update generically a register of a class by its id
 *
 * @param req param that has the request information
 * @param res param that will be set with the response information
 * @param classEntity Class of the entity to update
 */
const updateHandlerGenericEntity = function (req, res, classEntity, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        delete req.body["id"]; //The client can't change the id associated to the register
        repository.updateById(req.body, req.params.id).then((objUpdated) => { res.send(objUpdated); }).catch((e) => __awaiter(this, void 0, void 0, function* () {
            yield responseError(res, e);
        }));
    });
};
exports.updateHandlerGenericEntity = updateHandlerGenericEntity;
//# sourceMappingURL=apiHandler.js.map