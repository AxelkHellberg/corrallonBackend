"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const getConnectionDatabase = function () {
    return typeorm_1.getConnection();
};
exports.getConnectionDatabase = getConnectionDatabase;
//# sourceMappingURL=dbHandler.js.map