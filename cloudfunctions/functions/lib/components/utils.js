"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeUrl = void 0;
exports.normalizeUrl = function (url) {
    console.log(url);
    let newUrl = url.split("?")[0];
    if (newUrl.slice(-1) != "/")
        newUrl = newUrl + "/";
    return newUrl;
};
//# sourceMappingURL=utils.js.map