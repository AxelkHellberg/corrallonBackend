import { getPublicServices } from "../components/publicService";
import { Request, Response, NextFunction, response } from "express";
import { normalizeUrl } from "../components/utils";
import { createConnection, getConnection } from "typeorm";
import { responseError } from "../components/apiHandler";

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
            "host": "35.225.71.53",
            "port": 3306,
            "username": "koa_user",
            "password": ")}!'w9!\\,Z-gR2y';R)S!F+\\ay;u,}RN`hcj8$aL",
            "database": "koa_develop_remastered",
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