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
const typeorm_1 = require("typeorm");
const apiHandler_1 = require("../components/apiHandler");
exports.createNewConnection = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log("Recuperando conexion");
        typeorm_1.getConnection();
        next();
    }
    catch (e) {
        console.log("Creando conexion");
        typeorm_1.createConnection({
            "type": "mysql",
            "host": "35.225.71.53",
            "port": 3306,
            "username": "koa_user",
            "password": ")}!'w9!\\,Z-gR2y';R)S!F+\\ay;u,}RN`hcj8$aL",
            "database": "koa_develop",
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