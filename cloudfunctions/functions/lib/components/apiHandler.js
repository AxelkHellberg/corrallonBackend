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
const msg_1 = require("../msg/msg");
const FindResponse_1 = require("./FindResponse");
const responseError = function (res, e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e instanceof ErrorVDF_1.ErrorVDF)
            res.status(e.responseCode < 100 ? 500 : e.responseCode).send({ "responseCode": e.responseCode < 100 ? 500 : e.responseCode, "internalMessage": e.internalMessage, "userMessage": e.userMessage });
        else
            res.status(500).send({ "responseCode": 500, "internalMessage": e.toString(), "userMessage": e.toString() });
        res.locals.hasError = true;
    });
};
exports.responseError = responseError;
const getHandlerGenericEntity = function (req, res, classEntity, service) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.query);
            if ("select" in req.query)
                try {
                    req.query.select = JSON.parse(req.query.select);
                }
                catch (e) {
                    throw msg_1.Msg.MALFORMED_JSON_SELECT;
                }
            ;
            if ("order" in req.query)
                try {
                    req.query.order = JSON.parse(req.query.order);
                }
                catch (e) {
                    throw msg_1.Msg.MALFORMED_JSON_ORDER;
                }
            ;
            const objs = yield service.find(req.query);
            let findResponse = new FindResponse_1.FindResponse(objs);
            res.locals.responseData = findResponse;
            res.send(findResponse);
        }
        catch (e) {
            yield responseError(res, new ErrorVDF_1.ErrorVDF(e.toString(), e.toString(), 500));
        }
    });
};
exports.getHandlerGenericEntity = getHandlerGenericEntity;
const getByIdHandlerGenericEntity = function (req, res, classEntity, service) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!("id" in req.params))
                throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.ID_MANDATORY, msg_1.Msg.ID_MANDATORY, 400);
            const obj = yield service.findById(req.params.id);
            if (obj == null)
                throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.REGISTER_NOT_FOUND, msg_1.Msg.REGISTER_NOT_FOUND, 400);
            res.locals.responseData = obj;
            res.send(obj);
        }
        catch (e) {
            yield responseError(res, new ErrorVDF_1.ErrorVDF(e.toString(), e.toString(), 500));
        }
    });
};
exports.getByIdHandlerGenericEntity = getByIdHandlerGenericEntity;
const deleteHandlerGenericEntity = function (req, res, classEntity, service) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!("id" in req.params))
                throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.ID_MANDATORY, msg_1.Msg.ID_MANDATORY, 400);
            const obj = yield service.delete(req.params.id);
            if (obj == null)
                throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.REGISTER_NOT_FOUND, msg_1.Msg.REGISTER_NOT_FOUND, 400);
            res.locals.responseData = obj;
            res.status(204).send(obj);
        }
        catch (e) {
            yield responseError(res, new ErrorVDF_1.ErrorVDF(e.toString(), e.toString(), 500));
        }
    });
};
exports.deleteHandlerGenericEntity = deleteHandlerGenericEntity;
const postHandlerGenericEntity = function (req, res, classEntity, service) {
    return __awaiter(this, void 0, void 0, function* () {
        let newObj = new classEntity();
        Object.assign(newObj, req.body);
        try {
            yield service.save(newObj);
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