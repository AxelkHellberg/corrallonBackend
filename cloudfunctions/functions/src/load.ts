import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";
import { PermissionWS } from "./entity/PermissionWS";
import { HTTPMethod } from "./entity/HTTPMethod";
import { Report } from "./entity/Report";
import { DBConection } from "./config/DBConection";
import { JoinReport } from "./entity/JoinReport";
import { JoinType } from "./entity/JoinType";
import { JoinReportRepository } from "./repository/JoinReportRepository";
import { TipoFallaRepository } from "./repository/TipoFallaRepository";
import { TipoFalla } from "./entity/TipoFalla";

createConnection().then(async connection => {

  let jt = new JoinType()
  jt.id = 1
  jt.description = "left"
  await connection.manager.save(jt)
  jt.id = 2
  jt.description = "inner"
  await connection.manager.save(jt)
  let r2 = new Report()
  r2.id = 1
  r2.from = "CampoManiobra"
  r2.entityAlias = "CampoManiobra"
  r2.description = "Recuperar campos maniobra con nombre de planta"
  r2.where = "CampoManiobra.plantillaGuiaManiobraId = :plantillaGuiaManiobraId"
  await connection.manager.save(r2)
  let jr = new JoinReportRepository()
  let jr2 = new JoinReportRepository()
  let j: JoinReport = new JoinReport()
  j.joinColumn = "CampoManiobra.sistema"
  j.joinAlias = "sistema"
  j.report = r2
  j.joinTypeId = 1
  j.id = 1
  await jr.save(j)
  let j2: JoinReport = new JoinReport()
  j2.joinColumn = "sistema.planta"
  j2.joinAlias = "planta"
  j2.report = r2
  j2.joinTypeId = 1
  j2.id = 2
  await jr2.save(j2)
  const get = new HTTPMethod()
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
  userProfile.reportAvailable = [r2]
  await connection.manager.save(userProfile);
  const adminUser = new User();
  adminUser.id = 1
  adminUser.password = "123456";
  adminUser.name = "admin";
  adminUser.username = "admin";
  adminUser.dni = "123456";
  adminUser.lastName = "super";
  adminUser.profile = adminProfil;
  adminUser.fileNumber = "123"
  await connection.manager.save(adminUser);
  const standardUser = new User();
  standardUser.id = 2
  standardUser.password = "123456";
  standardUser.name = "lucas";
  standardUser.username = "lsegura";
  standardUser.dni = "prueba";
  standardUser.lastName = "segura";
  standardUser.fileNumber = "123"
  standardUser.profile = userProfile;

  await connection.manager.save(standardUser);

  let tr = new TipoFallaRepository()
  let tipoFalla1 = new TipoFalla()
  tipoFalla1.id = 1
  tipoFalla1.nombre = "Detectado"
  tipoFalla1.posicion = 1
  let tipoFalla2 = new TipoFalla()
  tipoFalla2.id = 2
  tipoFalla2.nombre = "En reparación"
  tipoFalla2.posicion = 2
  let tipoFalla3 = new TipoFalla()
  tipoFalla3.id = 3
  tipoFalla3.nombre = "Solucionado"
  tipoFalla3.posicion = 3
  await tr.save(tipoFalla1)
  await tr.save(tipoFalla2)
  await tr.save(tipoFalla3)
  /*let perfil = new Profile()
  perfil.id = 1
  connection.manager
    .createQueryBuilder()
    .relation(Profile, "permissionsWS")
    .of(perfil)
    .add(permiso);*/

}).catch(error => console.log(error));
