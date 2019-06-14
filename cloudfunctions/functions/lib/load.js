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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Profile_1 = require("./entity/Profile");
const PermissionWS_1 = require("./entity/PermissionWS");
const HTTPMethod_1 = require("./entity/HTTPMethod");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    const get = new HTTPMethod_1.HTTPMethod();
    const post = new HTTPMethod_1.HTTPMethod();
    const patch = new HTTPMethod_1.HTTPMethod();
    const deleteM = new HTTPMethod_1.HTTPMethod();
    get.name = "get";
    get.id = 1;
    post.name = "post";
    post.id = 2;
    patch.name = "patch";
    patch.id = 3;
    deleteM.name = "deleteM";
    deleteM.id = 4;
    yield connection.manager.save(get);
    yield connection.manager.save(post);
    yield connection.manager.save(deleteM);
    yield connection.manager.save(patch);
    let permiso = new PermissionWS_1.PermissionWS();
    permiso.id = 1;
    permiso.httpMethod = get;
    permiso.servicePath = "^(/entities/users/([0-9]+/)?)$";
    permiso.description = "Recuperar Usuarios";
    yield connection.manager.save(permiso);
    permiso.id = 2;
    permiso = new PermissionWS_1.PermissionWS();
    permiso.httpMethod = deleteM;
    permiso.servicePath = "^(/entities/users/)$";
    permiso.description = "Eliminar Usuarios";
    yield connection.manager.save(permiso);
    permiso.id = 3;
    permiso = new PermissionWS_1.PermissionWS();
    permiso.httpMethod = patch;
    permiso.servicePath = "^(/entities/users/[0-9]+/)$";
    permiso.description = "Modificar Usuarios";
    yield connection.manager.save(permiso);
    permiso.id = 4;
    permiso = new PermissionWS_1.PermissionWS();
    permiso.httpMethod = post;
    permiso.servicePath = "^(/entities/users/)$";
    permiso.description = "Crear Usuarios";
    yield connection.manager.save(permiso);
    let permisoToProfile1 = new PermissionWS_1.PermissionWS();
    permisoToProfile1.id = 1;
    let permisoToProfile2 = new PermissionWS_1.PermissionWS();
    permisoToProfile2.id = 2;
    const adminProfil = new Profile_1.Profile();
    adminProfil.id = 1;
    adminProfil.name = "admin";
    yield connection.manager.save(adminProfil);
    const userProfile = new Profile_1.Profile();
    userProfile.id = 2;
    userProfile.name = "userProfile";
    userProfile.permissionsWS = [permisoToProfile1, permisoToProfile2];
    yield connection.manager.save(userProfile);
    const adminUser = new User_1.User();
    adminUser.id = 1;
    adminUser.password = "123456";
    adminUser.name = "admin";
    adminUser.username = "admin";
    adminUser.dni = "123456";
    adminUser.lastName = "super";
    adminUser.profile = adminProfil;
    yield connection.manager.save(adminUser);
    const standardUser = new User_1.User();
    standardUser.id = 2;
    standardUser.password = "123456";
    standardUser.name = "lucas";
    standardUser.username = "lsegura";
    standardUser.dni = "prueba";
    standardUser.lastName = "segura";
    standardUser.profile = userProfile;
    yield connection.manager.save(standardUser);
    /*let perfil = new Profile()
    perfil.id = 1
    connection.manager
      .createQueryBuilder()
      .relation(Profile, "permissionsWS")
      .of(perfil)
      .add(permiso);*/
})).catch(error => console.log(error));
//# sourceMappingURL=load.js.map