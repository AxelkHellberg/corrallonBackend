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
exports.createNewConnection = void 0;
const typeorm_1 = require("typeorm");
const apiHandler_1 = require("../components/apiHandler");
const global_1 = require("../global");
exports.createNewConnection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Recuperando conexion");
        typeorm_1.getConnection();
        next();
    }
    catch (e) {
        console.log("Creando conexion");
        typeorm_1.createConnection({
            "type": "mysql",
            "host": global_1.GlobalVariable.DATA_BASE_IP,
            "port": 3306,
            "username": global_1.GlobalVariable.DATA_BASE_USER,
            "password": global_1.GlobalVariable.DATA_BASE_PASS,
            "database": global_1.GlobalVariable.DATA_BASE_NAME,
            "synchronize": false,
            "migrationsRun": false,
            "logging": false,
            "entities": [
                "lib/entity/**/*.js"
            ],
            "migrations": [
                "lib/migration/**/*.js"
            ],
            "subscribers": [
                "lib/subscriber/**/*.js"
            ],
            "cli": {
                "entitiesDir": "src/entity",
                "migrationsDir": "src/migration",
                "subscribersDir": "src/subscriber"
            }
        }).then((c) => { console.log("Conexion creada"); next(); }).catch((e2) => apiHandler_1.responseError(res, e2));
    }
});
//# sourceMappingURL=createNewConnection.js.map