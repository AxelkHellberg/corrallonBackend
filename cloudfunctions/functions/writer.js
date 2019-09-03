
const fs = require('fs');



function main(entidadName, repository = "GenericRepository") {
    writeRepository(entidadName, repository)
    writeService(entidadName)
    writeRoutes(entidadName)
}
main("TipoTag")


function writeRepository(entidadName, repository = "GenericRepository") {
    let repoCode = "import { GenericRepository } from './GenericRepository'; \n\
import { getRepository, Repository } from 'typeorm';\n\
import { "+ entidadName + " } from '../entity/" + entidadName + "';\n\
/************CONFIG CLASS**************** */\n\
const myClass = "+ entidadName + "\n\
/**************************************** */\n\
\n\
export class "+ entidadName + "Repository/**config */ extends " + repository + "<" + entidadName + "/**config */>{\n\
    public getRepository(): Repository<"+ entidadName + "/**config */> {\n\
        return getRepository(myClass);\n\
    }\n\
    \n\
    public getClass() {\n\
        return myClass\n\
    }\n\
}"
    fs.writeFile("./src/repository/" + entidadName + "Repository.ts", repoCode, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

function writeService(entidadName) {
    let servicesCode = "import { GenericeService } from './GenericService'; \n\
import { "+ entidadName + "Repository } from '../repository/" + entidadName + "Repository';\n\
import { "+ entidadName + " } from '../entity/" + entidadName + "';\n\
let encriptutils = require('../components/encryputils')\n\
\n\
/******************CONFIG CLASS************************** */\n\
const myRepository = "+ entidadName + "Repository\n\
/******************************************************** */\n\
\n\
export class "+ entidadName + "Service/**config */ extends GenericeService<" + entidadName + "/**config */> {\n\
    constructor() {\n\
        super(new myRepository())\n\
    }\n\
}"
    fs.writeFile("./src/services/" + entidadName + "Service.ts", servicesCode, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}


function writeRoutes(entidadName) {
    let routesCode = "import { addToGenericRoute } from './genericRoutes';\n\
import { " + entidadName + "Service } from '../services/" + entidadName + "Service';\n\
import { " + entidadName + " } from '../entity/" + entidadName + "';\n\
var express = require('express');\n\
var router = express.Router();\n\
\n\
/******************************************** */\n\
const service = new " + entidadName + "Service()\n\
const currentClass = " + entidadName + "\n\
/******************************************** */\n\
\n\
router = addToGenericRoute(router, currentClass, service)\n\
\n\
module.exports = router;"
    fs.writeFile("./src/routes/" + entidadName + "Routes.ts", routesCode, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

