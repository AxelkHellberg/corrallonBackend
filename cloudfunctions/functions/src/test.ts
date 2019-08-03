import "reflect-metadata";
import { createConnection } from "typeorm";
import { NotificacionFalla } from "./entity/NotificacionFalla";
import { Report } from "./entity/Report";
import { JoinReportRepository } from "./repository/JoinReportRepository";
import { JoinReport } from "./entity/JoinReport";
import { Planta } from "./entity/Planta";
import { Sistema } from "./entity/Sistema";
import { User } from "./entity/User";

createConnection().then(async connection => {

  let r = await connection.getRepository(User).createQueryBuilder("user")
    .leftJoinAndSelect("user.profile", "profile")
    .where("user.id=:myUserId", { myUserId: 1 })
    .getMany()
  console.log("%j", r)

  //  createReporteFalla(connection)
}).catch(error => console.log(error));


