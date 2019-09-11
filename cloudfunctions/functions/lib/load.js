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
const Report_1 = require("./entity/Report");
const JoinReport_1 = require("./entity/JoinReport");
const JoinReportRepository_1 = require("./repository/JoinReportRepository");
const ReportService_1 = require("./services/ReportService");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log("Init");
    yield creataeReportCamposRonda();
    console.log("Fin");
    /*  let estadoFallaService: EstadoFallaService = new EstadoFallaService()
      let estadoFalla = new EstadoFalla()
      estadoFalla.id = 1
      estadoFalla.nombre = "Detectado"
      estadoFalla.posicion = 1
      await estadoFallaService.save(estadoFalla)
      let estadoFalla2 = new EstadoFalla()
      estadoFalla2.id = 2
      estadoFalla2.nombre = "Solucionado"
      estadoFalla2.posicion = 2
      estadoFallaService.save(estadoFalla2)
    
      let jt = new JoinType()
      jt.id = 1
      jt.description = "left"
      await connection.manager.save(jt)
      jt.id = 2
      jt.description = "inner"
      await connection.manager.save(jt)
    
      let r2: Report = await createReporteGuiaManiobra()
      await createReporteFalla()
      await creataeReportCamposGuiaManiobra()
      await createReportMeInformationByToken()
    
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
    
    */
})).catch(error => console.log(error));
function creataeReportCamposGuiaManiobra() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r2 = new Report_1.Report();
        r2.id = 1;
        r2.from = "CampoManiobra";
        r2.entityAlias = "CampoManiobra";
        r2.description = "Recuperar campos maniobra con nombre de planta";
        r2.where = "CampoManiobra.plantillaGuiaManiobraId = :plantillaGuiaManiobraId";
        yield rService.save(r2);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let jr2 = new JoinReportRepository_1.JoinReportRepository();
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "CampoManiobra.sistema";
        j.joinAlias = "sistema";
        j.report = r2;
        j.joinTypeId = 1;
        yield jr.save(j);
        let j2 = new JoinReport_1.JoinReport();
        j2.joinColumn = "sistema.planta";
        j2.joinAlias = "planta";
        j2.report = r2;
        j2.joinTypeId = 1;
        yield jr2.save(j2);
        return r2;
    });
}
function creataeReportCamposRonda() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r2 = new Report_1.Report();
        r2.id = 6;
        r2.from = "CampoRonda";
        r2.entityAlias = "CampoRonda";
        r2.description = "Recuperar campos ronda con nombre de planta";
        r2.where = "CampoRonda.plantillaRondaId = :plantillaRondaId";
        yield rService.save(r2);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let jr2 = new JoinReportRepository_1.JoinReportRepository();
        let j3 = new JoinReport_1.JoinReport();
        j3.joinColumn = "CampoRonda.equipamiento";
        j3.joinAlias = "equipamiento";
        j3.report = r2;
        j3.joinTypeId = 1;
        yield jr.save(j3);
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "equipamiento.sistema";
        j.joinAlias = "sistema";
        j.report = r2;
        j.joinTypeId = 1;
        yield jr.save(j);
        let j2 = new JoinReport_1.JoinReport();
        j2.joinColumn = "sistema.planta";
        j2.joinAlias = "planta";
        j2.report = r2;
        j2.joinTypeId = 1;
        yield jr2.save(j2);
        return r2;
    });
}
function createReporteGuiaManiobra() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r = new Report_1.Report();
        r.from = "planta";
        r.entityAlias = "planta";
        r.description = "Recuperar campos de guia de maniobra por guiaManiobraId";
        r.where = "camposManiobras.plantillaGuiaManiobraId=:plantillaGuiaManiobraId";
        r.id = 2;
        yield rService.save(r);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "planta.sistemas";
        j.joinAlias = "sistemas";
        j.report = r;
        j.joinTypeId = 1;
        yield jr.save(j);
        let j2 = new JoinReport_1.JoinReport();
        j2.joinColumn = "sistemas.camposManiobras";
        j2.joinAlias = "camposManiobras";
        j2.report = r;
        j2.joinTypeId = 1;
        yield jr.save(j2);
        let j3 = new JoinReport_1.JoinReport();
        j3.joinColumn = "camposManiobras.valoresCamposManiobras";
        j3.joinAlias = "valoresCamposManiobras";
        j3.joinWhere = "valoresCamposManiobras.campoManiobraId=camposManiobras.id and valoresCamposManiobras.rondaId=:rondaId";
        j3.report = r;
        j3.joinTypeId = 1;
        yield jr.save(j3);
        return r;
    });
}
function createReportePlantillaRonda() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r = new Report_1.Report();
        r.from = "planta";
        r.entityAlias = "planta";
        r.description = "Recuperar campos de ronda por rondaId y plantillaRondaId";
        r.where = "camposRonda.plantillaRondaId=:plantillaRondaId";
        r.id = 5;
        yield rService.save(r);
        console.log(r);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "planta.sistemas";
        j.joinAlias = "sistemas";
        j.report = r;
        j.joinTypeId = 1;
        yield jr.save(j);
        let jr4 = new JoinReportRepository_1.JoinReportRepository();
        let j4 = new JoinReport_1.JoinReport();
        j4.joinColumn = "sistemas.equipamientos";
        j4.joinAlias = "equipamientos";
        j4.report = r;
        j4.joinTypeId = 1;
        yield jr.save(j4);
        let j2 = new JoinReport_1.JoinReport();
        j2.joinColumn = "equipamientos.camposRonda";
        j2.joinAlias = "camposRonda";
        j2.report = r;
        j2.joinTypeId = 1;
        yield jr.save(j2);
        let j3 = new JoinReport_1.JoinReport();
        j3.joinColumn = "camposRonda.valoresCamposRonda";
        j3.joinAlias = "valoresCamposRonda";
        j3.joinWhere = "valoresCamposRonda.campoRondaId=camposRonda.id and valoresCamposRonda.rondaId=:rondaId";
        j3.report = r;
        j3.joinTypeId = 1;
        yield jr.save(j3);
        return r;
    });
}
function createReportRonda() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r = new Report_1.Report();
        r.from = "planta";
        r.entityAlias = "planta";
        r.description = "Recuperar campos de guia de maniobra por guiaManiobraId";
        r.where = "camposRonda.plantillaRondaId=:plantillaRondaId";
        r.id = 2;
        yield rService.save(r);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "planta.sistemas";
        j.joinAlias = "sistemas";
        j.report = r;
        j.joinTypeId = 1;
        yield jr.save(j);
        let j2 = new JoinReport_1.JoinReport();
        j2.joinColumn = "sistemas.camposRonda";
        j2.joinAlias = "camposRonda";
        j2.report = r;
        j2.joinTypeId = 1;
        yield jr.save(j2);
        let j3 = new JoinReport_1.JoinReport();
        j3.joinColumn = "camposRonda.valoresCamposManiobras";
        j3.joinAlias = "valoresCamposManiobras";
        j3.joinWhere = "valoresCamposManiobras.campoManiobraId=camposManiobras.id and valoresCamposManiobras.guiaManiobraId=:guiaManiobraId";
        j3.report = r;
        j3.joinTypeId = 1;
        yield jr.save(j3);
        return r;
    });
}
function createReporteFalla() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r = new Report_1.Report();
        r.from = "NotificacionFalla";
        r.entityAlias = "notificacionFalla";
        r.description = "Recuperar notificaciones de fallas con la entidad asociada (valorCampoRonda, valorCampoManiobra, fallaSistema, fallaEquipamiento)";
        r.id = 3;
        yield rService.save(r);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "notificacionFalla.valoresCamposManiobras";
        j.joinAlias = "valoresCamposManiobras";
        j.report = r;
        j.joinTypeId = 1;
        yield jr.save(j);
        let j2 = new JoinReport_1.JoinReport();
        j2.joinColumn = "notificacionFalla.fallasSistema";
        j2.joinAlias = "fallasSistema";
        j2.report = r;
        j2.joinTypeId = 1;
        yield jr.save(j2);
        let j3 = new JoinReport_1.JoinReport();
        j3.joinColumn = "notificacionFalla.fallasEquipamiento";
        j3.joinAlias = "fallasEquipamiento";
        j3.report = r;
        j3.joinTypeId = 1;
        yield jr.save(j3);
        let j4 = new JoinReport_1.JoinReport();
        j4.joinColumn = "notificacionFalla.valoresCamposRonda";
        j4.joinAlias = "valoresCamposRonda";
        j4.report = r;
        j4.joinTypeId = 1;
        yield jr.save(j4);
        let j5 = new JoinReport_1.JoinReport();
        j5.joinColumn = "notificacionFalla.estadoFalla";
        j5.joinAlias = "estadoFalla";
        j5.report = r;
        j5.joinTypeId = 1;
        yield jr.save(j5);
        let j6 = new JoinReport_1.JoinReport();
        j6.joinColumn = "notificacionFalla.tipoFalla";
        j6.joinAlias = "tipoFalla";
        j6.report = r;
        j6.joinTypeId = 1;
        yield jr.save(j6);
        let j7 = new JoinReport_1.JoinReport();
        j7.joinColumn = "valoresCamposManiobras.guiaManiobra";
        j7.joinAlias = "guiaManiobra";
        j7.report = r;
        j7.joinTypeId = 1;
        yield jr.save(j7);
        let j8 = new JoinReport_1.JoinReport();
        j8.joinColumn = "valoresCamposManiobras.campoManiobra";
        j8.joinAlias = "campoManiobra";
        j8.report = r;
        j8.joinTypeId = 1;
        yield jr.save(j8);
        let j9 = new JoinReport_1.JoinReport();
        j9.joinColumn = "campoManiobra.sistema";
        j9.joinAlias = "sistema";
        j9.report = r;
        j9.joinTypeId = 1;
        yield jr.save(j9);
        let j10 = new JoinReport_1.JoinReport();
        j10.joinColumn = "guiaManiobra.user";
        j10.joinAlias = "user";
        j10.report = r;
        j10.joinTypeId = 1;
        yield jr.save(j10);
        return r;
    });
}
function createReportMeInformationByToken() {
    return __awaiter(this, void 0, void 0, function* () {
        let rService = new ReportService_1.ReportService();
        let r2 = new Report_1.Report();
        r2.id = 4;
        r2.from = "User";
        r2.entityAlias = "user";
        r2.description = "Recupera informacion del usuario y el perfil mediante token";
        r2.where = "user.id=:myUserId";
        yield rService.save(r2);
        let jr = new JoinReportRepository_1.JoinReportRepository();
        let jr2 = new JoinReportRepository_1.JoinReportRepository();
        let j = new JoinReport_1.JoinReport();
        j.joinColumn = "user.profile";
        j.joinAlias = "profile";
        j.report = r2;
        j.joinTypeId = 1;
        yield jr.save(j);
        return r2;
    });
}
//# sourceMappingURL=load.js.map