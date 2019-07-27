import "reflect-metadata";
import { createConnection } from "typeorm";
import { NotificacionFalla } from "./entity/NotificacionFalla";
import { Report } from "./entity/Report";
import { JoinReportRepository } from "./repository/JoinReportRepository";
import { JoinReport } from "./entity/JoinReport";
import { Planta } from "./entity/Planta";
import { Sistema } from "./entity/Sistema";

createConnection().then(async connection => {
  let r = await connection.getRepository(Planta).createQueryBuilder("planta")
    .leftJoinAndSelect("planta.sistemas", "sistemas", null, { guiaManiobraId: 1, bb: 2 })
    .leftJoinAndSelect("sistemas.camposManiobras", "camposManiobras", null, { guiaManiobraId: 1, bb: 2 })
    .leftJoinAndSelect("camposManiobras.valoresCamposManiobras", "valoresCamposManiobras", "valoresCamposManiobras.campoManiobraId=camposManiobras.id and valoresCamposManiobras.guiaManiobraId=:guiaManiobraId", { guiaManiobraId: 1, bb: 2 })
    .where("(valoresCamposManiobras.guiaManiobraId=1 or valoresCamposManiobras.guiaManiobraId is null) and camposManiobras.plantillaGuiaManiobraId=1")
    .getMany()
  console.log("%j", r)


}).catch(error => console.log(error));
