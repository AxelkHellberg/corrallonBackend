import "reflect-metadata";
import { createConnection } from "typeorm";
import { NotificacionFalla } from "./entity/NotificacionFalla";
import { Report } from "./entity/Report";
import { JoinReportRepository } from "./repository/JoinReportRepository";
import { JoinReport } from "./entity/JoinReport";
import { Planta } from "./entity/Planta";
import { Sistema } from "./entity/Sistema";
import { PlantillaRonda } from "./entity/PlantillaRonda";

createConnection().then(async connection => {

  let r = await connection.getRepository(PlantillaRonda).createQueryBuilder("plantillaRonda")
    .leftJoinAndSelect("plantillaRonda.campoRondaPlantillaRonda", "enlaceRonda")
    .leftJoinAndSelect("enlaceRonda.campoRonda", "camposRonda")
    .getMany()
  console.log("%j", r)

  //  createReporteFalla(connection)
}).catch(error => console.log(error));