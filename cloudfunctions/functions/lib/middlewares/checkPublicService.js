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
const publicService_1 = require("../components/publicService");
const utils_1 = require("../components/utils");
exports.checkPublicService = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let publicService = publicService_1.getPublicServices();
    let newUrl = utils_1.normalizeUrl(req.originalUrl);
    console.log(newUrl);
    for (let i = 0; i < publicService.length; i++)
        if (publicService[i].url == newUrl && publicService[i].method == req.method) {
            res.locals.publicService = true;
        }
    console.log(res.locals.publicService);
    next();
});
//# sourceMappingURL=checkPublicService.js.map