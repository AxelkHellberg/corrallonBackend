import "reflect-metadata";
import { createConnection } from "typeorm";
import { NotificacionFalla } from "./entity/NotificacionFalla";
import { Report } from "./entity/Report";
import { JoinReportRepository } from "./repository/JoinReportRepository";
import { JoinReport } from "./entity/JoinReport";
import { Planta } from "./entity/Planta";
import { Sistema } from "./entity/Sistema";

createConnection().then(async connection => {

  let r = await connection.getRepository(NotificacionFalla).createQueryBuilder("notificacionFalla")
    .leftJoinAndSelect("notificacionFalla.valoresCamposManiobras", "valoresCamposManiobras")
    .leftJoinAndSelect("notificacionFalla.fallasSistema", "fallasSistema")
    .leftJoinAndSelect("notificacionFalla.fallasEquipamiento", "fallasEquipamiento")
    .leftJoinAndSelect("notificacionFalla.valoresCamposRonda", "valoresCamposRonda")
    .leftJoinAndSelect("notificacionFalla.estadoFalla", "estadoFalla")
    .leftJoinAndSelect("notificacionFalla.tipoFalla", "tipoFalla")
    .leftJoinAndSelect("valoresCamposManiobras.guiaManiobra", "guiaManiobra")
    .leftJoinAndSelect("valoresCamposManiobras.campoManiobra", "campoManiobra")
    .leftJoinAndSelect("campoManiobra.sistema", "sistema")
    .leftJoinAndSelect("guiaManiobra.user", "user")

    .getMany()
  console.log("%j", r)

  //  createReporteFalla(connection)
}).catch(error => console.log(error));


