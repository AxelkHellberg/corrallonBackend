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
import { ValorCampoManiobra } from "./entity/ValorCampoManiobra";
import { ValorCampoManiobraService } from "./services/ValorCampoManiobraService";

createConnection().then(async connection => {

    let valor: ValorCampoManiobra = new ValorCampoManiobra()
    valor.campoManiobraId = 1
    valor.guiaManiobraId = 2
    valor.valor = true
    let v = new ValorCampoManiobraService()
    await v.save(valor)

    /*let perfil = new Profile()
    perfil.id = 1
    connection.manager
      .createQueryBuilder()
      .relation(Profile, "permissionsWS")
      .of(perfil)
      .add(permiso);*/

}).catch(error => console.log(error));
