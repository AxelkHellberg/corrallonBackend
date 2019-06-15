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
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    /*  let r = new Report()
      r.from = "User"
      r.select = "username"
      r.where = "id=1"
      r.description = "Test report"
      await connection.manager.save(r)*/
    let obj = yield connection.getRepository("Report").find();
    console.log(obj[0]["from"]);
    console.log(yield connection.getRepository(obj[0]["from"]).find());
    /*const get = new HTTPMethod()
    const post = new HTTPMethod()
    const patch = new HTTPMethod()
    const deleteM = new HTTPMethod()
    get.name = "get"
    get.id = 1
    post.name = "post"
    post.id = 2
    patch.name = "patch"
    patch.id = 3
    deleteM.name = "deleteM"
    deleteM.id = 4
  
    await connection.manager.save(get)
    await connection.manager.save(post)
    await connection.manager.save(deleteM)
    await connection.manager.save(patch)
  
    let permiso = new PermissionWS()
    permiso.id = 1
    permiso.httpMethod = get
    permiso.servicePath = "^(/entities/users/([0-9]+/)?)$"
    permiso.description = "Recuperar Usuarios"
    await connection.manager.save(permiso);
    permiso.id = 2
    permiso = new PermissionWS()
    permiso.httpMethod = deleteM
    permiso.servicePath = "^(/entities/users/)$"
    permiso.description = "Eliminar Usuarios"
    await connection.manager.save(permiso);
    permiso.id = 3
    permiso = new PermissionWS()
    permiso.httpMethod = patch
    permiso.servicePath = "^(/entities/users/[0-9]+/)$"
    permiso.description = "Modificar Usuarios"
    await connection.manager.save(permiso);
    permiso.id = 4
    permiso = new PermissionWS()
    permiso.httpMethod = post
    permiso.servicePath = "^(/entities/users/)$"
    permiso.description = "Crear Usuarios"
    await connection.manager.save(permiso);
    let permisoToProfile1 = new PermissionWS()
    permisoToProfile1.id = 1
    let permisoToProfile2 = new PermissionWS()
    permisoToProfile2.id = 2
    const adminProfil = new Profile()
    adminProfil.id = 1
    adminProfil.name = "admin"
    await connection.manager.save(adminProfil);
    const userProfile = new Profile()
    userProfile.id = 2
    userProfile.name = "userProfile"
    userProfile.permissionsWS = [permisoToProfile1, permisoToProfile2]
    await connection.manager.save(userProfile);
    const adminUser = new User();
    adminUser.id = 1
    adminUser.password = "123456";
    adminUser.name = "admin";
    adminUser.username = "admin";
    adminUser.dni = "123456";
    adminUser.lastName = "super";
    adminUser.profile = adminProfil;
    await connection.manager.save(adminUser);
    const standardUser = new User();
    standardUser.id = 2
    standardUser.password = "123456";
    standardUser.name = "lucas";
    standardUser.username = "lsegura";
    standardUser.dni = "prueba";
    standardUser.lastName = "segura";
    standardUser.profile = userProfile;
    await connection.manager.save(standardUser);*/
    /*let perfil = new Profile()
    perfil.id = 1
    connection.manager
      .createQueryBuilder()
      .relation(Profile, "permissionsWS")
      .of(perfil)
      .add(permiso);*/
})).catch(error => console.log(error));
//# sourceMappingURL=load.js.map