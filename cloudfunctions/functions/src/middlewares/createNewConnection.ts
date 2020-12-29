import { getPublicServices } from "../components/publicService";
import { Request, Response, NextFunction, response } from "express";
import { normalizeUrl } from "../components/utils";
import { createConnection, getConnection } from "typeorm";
import { responseError } from "../components/apiHandler";
import { GlobalVariable } from '../global';

export const createNewConnection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("Recuperando conexion")
        getConnection()
        next()
    }
    catch (e) {
        console.log("Creando conexion")
        createConnection({
            "type": "mysql",
            "host": GlobalVariable.DATA_BASE_IP,
            "port": 3306,
            "username": GlobalVariable.DATA_BASE_USER,
            "password": GlobalVariable.DATA_BASE_PASS,
            "database": GlobalVariable.DATA_BASE_NAME,
            "synchronize": false, // NO DEJAR SYNCHRONIZE EN KOA_DEVELOP
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
        }).then((c) => { console.log("Conexion creada"); next() }).catch((e2) => responseError(res, e2))
    }
}